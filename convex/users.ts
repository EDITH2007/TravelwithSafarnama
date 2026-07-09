import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get the salt for a given username to hash password on client
export const getSalt = query({
  args: { username: v.string() },
  handler: async (ctx: any, args: any) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_username", (q: any) => q.eq("username", args.username))
      .unique();
    return user ? user.salt : null;
  },
});

// Register a new user
export const register = mutation({
  args: {
    username: v.string(),
    passwordHash: v.string(),
    salt: v.string(),
    name: v.string(),
    phone: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_username", (q: any) => q.eq("username", args.username))
      .unique();
    if (existingUser) {
      throw new Error("Username already taken");
    }

    // Insert user
    const userId = await ctx.db.insert("users", {
      username: args.username,
      passwordHash: args.passwordHash,
      salt: args.salt,
      name: args.name,
      phone: args.phone,
    });

    // Create session (expires in 30 days)
    const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;
    const sessionId = await ctx.db.insert("sessions", {
      userId,
      token: userId + "-" + Math.random().toString(36).substring(2), // extra randomness
      expiresAt,
    });

    const user = await ctx.db.get(userId);
    return {
      user,
      token: sessionId,
    };
  },
});

// Log in an existing user
export const login = mutation({
  args: {
    username: v.string(),
    passwordHash: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_username", (q: any) => q.eq("username", args.username))
      .unique();

    if (!user || user.passwordHash !== args.passwordHash) {
      throw new Error("Invalid username or password");
    }

    // Create session (expires in 30 days)
    const expiresAt = Date.now() + 30 * 24 * 60 * 60 * 1000;
    const sessionId = await ctx.db.insert("sessions", {
      userId: user._id,
      token: user._id + "-" + Math.random().toString(36).substring(2), // extra randomness
      expiresAt,
    });

    return {
      user,
      token: sessionId,
    };
  },
});

// Get user profile by session token (session ID)
export const getByToken = query({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const sessionId = args.token as any; // Cast as session ID
      const session = await ctx.db.get(sessionId);
      if (!session) {
        return null;
      }

      // Check if session has expired
      if (session.expiresAt < Date.now()) {
        await ctx.db.delete(sessionId); // clean up expired session
        return null;
      }

      return await ctx.db.get(session.userId);
    } catch (e) {
      return null;
    }
  },
});

// Update user profile details
export const updateProfile = mutation({
  args: {
    token: v.string(),
    name: v.string(),
    phone: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const sessionId = args.token as any;
    const session = await ctx.db.get(sessionId);
    if (!session || session.expiresAt < Date.now()) {
      throw new Error("Unauthorized or session expired");
    }

    await ctx.db.patch(session.userId, {
      name: args.name,
      phone: args.phone,
    });

    return await ctx.db.get(session.userId);
  },
});

// Log out user by deleting session
export const logout = mutation({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const sessionId = args.token as any;
      await ctx.db.delete(sessionId);
      return true;
    } catch (e) {
      return false;
    }
  },
});
