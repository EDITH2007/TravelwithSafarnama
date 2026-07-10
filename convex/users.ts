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
    if (user) return user.salt;
    
    // Default salt for admin auto-registration
    if (args.username.toLowerCase().trim() === "somendra") {
      return "adminsalt";
    }
    return null;
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
    const normalizedUsername = args.username.toLowerCase().trim();
    let user = await ctx.db
      .query("users")
      .withIndex("by_username", (q: any) => q.eq("username", normalizedUsername))
      .unique();

    if (!user) {
      // Securely auto-seed admin if login hash matches Somendra@2007 + adminsalt
      if (normalizedUsername === "somendra" && args.passwordHash === "51d8d7aabfe1e07d3840434661fd8f81016e543ada7054cae8ba3d7f0095198c") {
        const userId = await ctx.db.insert("users", {
          username: "somendra",
          passwordHash: "51d8d7aabfe1e07d3840434661fd8f81016e543ada7054cae8ba3d7f0095198c",
          salt: "adminsalt",
          name: "Somendra",
          phone: "9999999999",
        });
        user = await ctx.db.get(userId);
      } else {
        throw new Error("Invalid username or password");
      }
    } else if (user.passwordHash !== args.passwordHash) {
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

function getAvatarHash(username: string): string {
  const avatars = [
    '1535713875002-d1d0cf377fde', // man 1
    '1494790108377-be9c29b29330', // woman 1
    '1507003211169-0a1dd7228f2d', // man 2
    '1438761681033-6461ffad8d80', // woman 2
    '1500648767791-00dcc994a43e', // man 3
    '1544005313-94ddf0286df2', // woman 3
  ];
  let hash = 0;
  for (let i = 0; i < username.length; i++) {
    hash += username.charCodeAt(i);
  }
  return avatars[hash % avatars.length];
}

function getTravelBadge(score: number): string {
  if (score >= 1200) return 'Globetrotter';
  if (score >= 800) return 'Pathfinder';
  if (score >= 400) return 'Explorer';
  if (score >= 200) return 'Wanderer';
  return 'Novice';
}

// Get all actual users with their calculated travel score (persistent, no decay)
export const getLeaderboard = query({
  args: {},
  handler: async (ctx: any) => {
    const allUsers = await ctx.db.query("users").collect();
    const allBlogs = await ctx.db.query("blogs").collect();
    const allExperiences = await ctx.db.query("experiences").collect();

    // Filter out mock/simulated usernames to keep leaderboard to actual users
    const defaultUsernames = ['siddharth_explorer', 'priya_travels', 'amit_himalayas', 'ananya_wanderlust', 'rahul_trips'];
    const users = allUsers.filter((u: any) => !defaultUsernames.includes(u.username));

    const leaderboard = [];

    for (const u of users) {
      const visited = await ctx.db
        .query("visitedPlaces")
        .withIndex("by_user", (q: any) => q.eq("userId", u._id))
        .collect();

      const logs = await ctx.db
        .query("visitedLogs")
        .withIndex("by_user", (q: any) => q.eq("userId", u._id))
        .collect();

      const userBlogs = allBlogs.filter((b: any) => b.uploadedByUsername === u.username);
      const userExps = allExperiences.filter((e: any) => e.uploadedByUsername === u.username);

      // 1. Calculate persistent base score (XP)
      const visitedPoints = visited.length * 100;
      const detailedCount = logs.filter(
        (l: any) => l.visitedHighlights || l.foodName || l.experience
      ).length;
      const logBonus = detailedCount * 50;
      const blogPoints = userBlogs.length * 200;
      const storyPoints = userExps.length * 150;

      const finalScore = visitedPoints + logBonus + blogPoints + storyPoints;

      leaderboard.push({
        name: u.name,
        username: u.username,
        score: finalScore,
        avatar: u.username === 'somendra' 
          ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
          : `https://images.unsplash.com/photo-${getAvatarHash(u.username)}?w=100`,
        badge: getTravelBadge(finalScore),
        isCurrentUser: false,
      });
    }

    // Sort descending by score
    leaderboard.sort((a, b) => b.score - a.score);
    return leaderboard;
  }
});

// Clean up default simulated users from the Convex database
export const cleanUpSeededUsers = mutation({
  args: {},
  handler: async (ctx: any) => {
    const defaultUsernames = ['siddharth_explorer', 'priya_travels', 'amit_himalayas', 'ananya_wanderlust', 'rahul_trips'];
    
    for (const username of defaultUsernames) {
      const user = await ctx.db
        .query("users")
        .withIndex("by_username", (q: any) => q.eq("username", username))
        .unique();
        
      if (user) {
        // Delete travel logs
        const logs = await ctx.db
          .query("visitedLogs")
          .withIndex("by_user", (q: any) => q.eq("userId", user._id))
          .collect();
        for (const log of logs) {
          await ctx.db.delete(log._id);
        }

        // Delete visited places
        const places = await ctx.db
          .query("visitedPlaces")
          .withIndex("by_user", (q: any) => q.eq("userId", user._id))
          .collect();
        for (const place of places) {
          await ctx.db.delete(place._id);
        }

        // Delete blogs
        const blogs = await ctx.db
          .query("blogs")
          .filter((q: any) => q.eq(q.field("uploadedByUsername"), user.username))
          .collect();
        for (const blog of blogs) {
          await ctx.db.delete(blog._id);
        }

        // Finally, delete user
        await ctx.db.delete(user._id);
      }
    }
    return true;
  }
});


