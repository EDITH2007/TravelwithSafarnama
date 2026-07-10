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

// Get all users with their calculated travel score, including decay
export const getLeaderboard = query({
  args: {},
  handler: async (ctx: any) => {
    const users = await ctx.db.query("users").collect();
    const allBlogs = await ctx.db.query("blogs").collect();
    const allExperiences = await ctx.db.query("experiences").collect();

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

      // 1. Calculate base score
      const visitedPoints = visited.length * 100;
      const detailedCount = logs.filter(
        (l: any) => l.visitedHighlights || l.foodName || l.experience
      ).length;
      const logBonus = detailedCount * 50;
      const blogPoints = userBlogs.length * 200;
      const storyPoints = userExps.length * 150;

      const baseScore = visitedPoints + logBonus + blogPoints + storyPoints;

      // 2. Find last activity timestamp
      let lastActivityTime = u._creationTime;
      
      visited.forEach((v: any) => {
        if (v._creationTime > lastActivityTime) lastActivityTime = v._creationTime;
      });
      logs.forEach((l: any) => {
        if (l._creationTime > lastActivityTime) lastActivityTime = l._creationTime;
      });
      userBlogs.forEach((b: any) => {
        if (b._creationTime > lastActivityTime) lastActivityTime = b._creationTime;
      });
      userExps.forEach((e: any) => {
        if (e._creationTime > lastActivityTime) lastActivityTime = e._creationTime;
      });

      // 3. Score decay
      // Decay score by 1% per minute of inactivity after 5 minutes grace period
      const inactivityMs = Date.now() - lastActivityTime;
      const inactivityMins = inactivityMs / (1000 * 60);
      let decayFactor = 1.0;
      if (inactivityMins > 5) {
        decayFactor = Math.pow(0.99, inactivityMins - 5);
      }
      decayFactor = Math.max(0.1, decayFactor);
      const finalScore = Math.round(baseScore * decayFactor);

      leaderboard.push({
        name: u.name,
        username: u.username,
        score: finalScore,
        avatar: u.username === 'somendra' 
          ? 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
          : `https://images.unsplash.com/photo-${getAvatarHash(u.username)}?w=100`,
        badge: getTravelBadge(finalScore),
        isCurrentUser: false, // will be matched on username on client
      });
    }

    // Sort descending
    leaderboard.sort((a, b) => b.score - a.score);
    return leaderboard;
  }
});

// Seed default users in Convex database if they don't exist
export const seedLeaderboard = mutation({
  args: {},
  handler: async (ctx: any) => {
    const defaultTravelers = [
      { name: 'Siddharth Roy', username: 'siddharth_explorer', phone: '9999900001' },
      { name: 'Priya Sharma', username: 'priya_travels', phone: '9999900002' },
      { name: 'Amit Kumar', username: 'amit_himalayas', phone: '9999900003' },
      { name: 'Ananya Patel', username: 'ananya_wanderlust', phone: '9999900004' },
      { name: 'Rahul Verma', username: 'rahul_trips', phone: '9999900005' },
    ];

    for (const traveler of defaultTravelers) {
      const existing = await ctx.db
        .query("users")
        .withIndex("by_username", (q: any) => q.eq("username", traveler.username))
        .unique();

      if (!existing) {
        const userId = await ctx.db.insert("users", {
          username: traveler.username,
          passwordHash: "seeded_password_hash",
          salt: "seededsalt",
          name: traveler.name,
          phone: traveler.phone,
        });

        // Insert initial baseline activities to populate leaderboard with non-zero scores
        if (traveler.username === 'siddharth_explorer') {
          await ctx.db.insert("visitedPlaces", { userId, slug: 'manali' });
          await ctx.db.insert("visitedPlaces", { userId, slug: 'hampi' });
          await ctx.db.insert("visitedLogs", { 
            userId, slug: 'manali', rating: 5, expense: 12000, 
            visitedHighlights: 'Solang Valley, Old Manali', 
            foodName: 'Siddu', foodRating: 5, currentWeather: 'Sunny', 
            experience: 'Amazing mountains!' 
          });
          await ctx.db.insert("blogs", {
            title: "Exploring the Peaks of Manali",
            slug: `exploring-peaks-manali-${Date.now()}`,
            excerpt: "My journey through the Solang Valley and Rohtang Pass.",
            coverImage: "https://images.unsplash.com/photo-1593181629939-1a74e323a8e7?w=800",
            authorName: traveler.name,
            authorAvatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100`,
            category: "Adventure",
            readTime: 5,
            createdAt: new Date().toISOString(),
            content: "Manali is beautiful...",
            uploadedByUsername: traveler.username,
          });
        } else if (traveler.username === 'priya_travels') {
          await ctx.db.insert("visitedPlaces", { userId, slug: 'goa' });
          await ctx.db.insert("visitedPlaces", { userId, slug: 'hampi' });
          await ctx.db.insert("visitedLogs", { 
            userId, slug: 'goa', rating: 4, expense: 8000, 
            visitedHighlights: 'Baga Beach, Dudhsagar Falls', 
            foodName: 'Fish Curry', foodRating: 4, currentWeather: 'Rainy', 
            experience: 'Lush green Goa in monsoons.' 
          });
        } else if (traveler.username === 'amit_himalayas') {
          await ctx.db.insert("visitedPlaces", { userId, slug: 'manali' });
        } else if (traveler.username === 'ananya_wanderlust') {
          await ctx.db.insert("visitedPlaces", { userId, slug: 'hampi' });
        } else if (traveler.username === 'rahul_trips') {
          await ctx.db.insert("visitedPlaces", { userId, slug: 'varanasi' });
        }
      }
    }
    return true;
  }
});

// Simulate travel activity to show live changes
export const simulateActivity = mutation({
  args: {},
  handler: async (ctx: any) => {
    const defaultUsernames = ['siddharth_explorer', 'priya_travels', 'amit_himalayas', 'ananya_wanderlust', 'rahul_trips'];
    const randomUsername = defaultUsernames[Math.floor(Math.random() * defaultUsernames.length)];

    const user = await ctx.db
      .query("users")
      .withIndex("by_username", (q: any) => q.eq("username", randomUsername))
      .unique();

    if (!user) return false;

    const slugs = ['manali', 'varanasi', 'hampi', 'goa', 'munnar', 'jaipur', 'leh-ladakh', 'ooty'];
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];

    const rand = Math.random();
    if (rand < 0.4) {
      // 1. Visit a new place
      const existing = await ctx.db
        .query("visitedPlaces")
        .withIndex("by_user", (q: any) => q.eq("userId", user._id))
        .filter((q: any) => q.eq(q.field("slug"), randomSlug))
        .unique();

      if (existing) {
        await ctx.db.delete(existing._id);
      }
      await ctx.db.insert("visitedPlaces", { userId: user._id, slug: randomSlug });

      // Clean up to avoid bloat (>8)
      const visited = await ctx.db
        .query("visitedPlaces")
        .withIndex("by_user", (q: any) => q.eq("userId", user._id))
        .collect();
      if (visited.length > 8) {
        const sorted = visited.sort((a: any, b: any) => a._creationTime - b._creationTime);
        await ctx.db.delete(sorted[0]._id);
      }
    } else if (rand < 0.7) {
      // 2. Add/update visited log
      const existing = await ctx.db
        .query("visitedLogs")
        .withIndex("by_user", (q: any) => q.eq("userId", user._id))
        .filter((q: any) => q.eq(q.field("slug"), randomSlug))
        .unique();

      if (existing) {
        await ctx.db.delete(existing._id);
      }
      await ctx.db.insert("visitedLogs", {
        userId: user._id,
        slug: randomSlug,
        rating: Math.floor(Math.random() * 2) + 4,
        expense: Math.floor(Math.random() * 10000) + 2000,
        visitedHighlights: "Beautiful attractions and scenery!",
        foodName: "Local delicacy",
        foodRating: 5,
        currentWeather: "Pleasant",
        experience: "Had a great time traveling here!",
      });

      // Clean up to avoid bloat (>8)
      const logs = await ctx.db
        .query("visitedLogs")
        .withIndex("by_user", (q: any) => q.eq("userId", user._id))
        .collect();
      if (logs.length > 8) {
        const sorted = logs.sort((a: any, b: any) => a._creationTime - b._creationTime);
        await ctx.db.delete(sorted[0]._id);
      }
    } else {
      // 3. Write a blog post
      await ctx.db.insert("blogs", {
        title: `My amazing adventure in ${randomSlug.toUpperCase()}`,
        slug: `adventure-${randomSlug}-${Date.now()}`,
        excerpt: `A wonderful trip detailing the culture and sights of ${randomSlug}.`,
        coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        authorName: user.name,
        authorAvatar: `https://images.unsplash.com/photo-${getAvatarHash(user.username)}?w=100`,
        category: "Adventure",
        readTime: 5,
        createdAt: new Date().toISOString(),
        content: `I visited ${randomSlug} and it was incredible...`,
        uploadedByUsername: user.username,
      });

      // Clean up to avoid bloat (>5)
      const userBlogs = await ctx.db
        .query("blogs")
        .filter((q: any) => q.eq(q.field("uploadedByUsername"), user.username))
        .collect();
      if (userBlogs.length > 5) {
        const sorted = userBlogs.sort((a: any, b: any) => a._creationTime - b._creationTime);
        await ctx.db.delete(sorted[0]._id);
      }
    }

    return true;
  }
});

