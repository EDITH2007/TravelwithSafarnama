import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Helper to check session and return user ID
async function getUserIdByToken(ctx: any, token: string) {
  const session = await ctx.db.get(token as any);
  if (!session || session.expiresAt < Date.now()) {
    throw new Error("Unauthorized or session expired");
  }
  return session.userId;
}

// --- WISHLIST API ---

export const listWishlist = query({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const userId = await getUserIdByToken(ctx, args.token);
      return await ctx.db
        .query("wishlist")
        .withIndex("by_user", (q: any) => q.eq("userId", userId))
        .collect();
    } catch (e) {
      return [];
    }
  },
});

export const toggleWishlist = mutation({
  args: { token: v.string(), slug: v.string() },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    const existing = await ctx.db
      .query("wishlist")
      .withIndex("by_user", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.eq(q.field("slug"), args.slug))
      .unique();

    if (existing) {
      await ctx.db.delete(existing._id);
      return { action: "removed", slug: args.slug };
    } else {
      await ctx.db.insert("wishlist", {
        userId,
        slug: args.slug,
      });
      return { action: "added", slug: args.slug };
    }
  },
});

// --- VISITED PLACES & LOGS API ---

export const listVisited = query({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const userId = await getUserIdByToken(ctx, args.token);
      return await ctx.db
        .query("visitedPlaces")
        .withIndex("by_user", (q: any) => q.eq("userId", userId))
        .collect();
    } catch (e) {
      return [];
    }
  },
});

export const toggleVisited = mutation({
  args: { token: v.string(), slug: v.string() },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    const existing = await ctx.db
      .query("visitedPlaces")
      .withIndex("by_user", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.eq(q.field("slug"), args.slug))
      .unique();

    if (existing) {
      await ctx.db.delete(existing._id);
      return { action: "removed", slug: args.slug };
    } else {
      await ctx.db.insert("visitedPlaces", {
        userId,
        slug: args.slug,
      });
      return { action: "added", slug: args.slug };
    }
  },
});

export const listVisitedLogs = query({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const userId = await getUserIdByToken(ctx, args.token);
      return await ctx.db
        .query("visitedLogs")
        .withIndex("by_user", (q: any) => q.eq("userId", userId))
        .collect();
    } catch (e) {
      return [];
    }
  },
});

export const addVisitedLog = mutation({
  args: {
    token: v.string(),
    slug: v.string(),
    rating: v.number(),
    expense: v.number(),
    visitedHighlights: v.string(),
    foodName: v.string(),
    foodRating: v.number(),
    currentWeather: v.string(),
    experience: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    const existing = await ctx.db
      .query("visitedLogs")
      .withIndex("by_user", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.eq(q.field("slug"), args.slug))
      .unique();

    const logData = {
      userId,
      slug: args.slug,
      rating: args.rating,
      expense: args.expense,
      visitedHighlights: args.visitedHighlights,
      foodName: args.foodName,
      foodRating: args.foodRating,
      currentWeather: args.currentWeather,
      experience: args.experience,
    };

    if (existing) {
      await ctx.db.patch(existing._id, logData);
      return existing._id;
    } else {
      return await ctx.db.insert("visitedLogs", logData);
    }
  },
});

export const removeVisitedLog = mutation({
  args: { token: v.string(), slug: v.string() },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    const existing = await ctx.db
      .query("visitedLogs")
      .withIndex("by_user", (q: any) => q.eq("userId", userId))
      .filter((q: any) => q.eq(q.field("slug"), args.slug))
      .unique();

    if (existing) {
      await ctx.db.delete(existing._id);
      return true;
    }
    return false;
  },
});

// --- TRIP PLANS API ---

export const listTripPlans = query({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const userId = await getUserIdByToken(ctx, args.token);
      return await ctx.db
        .query("tripPlans")
        .withIndex("by_user", (q: any) => q.eq("userId", userId))
        .collect();
    } catch (e) {
      return [];
    }
  },
});

export const createTripPlan = mutation({
  args: {
    token: v.string(),
    destination: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    travelers: v.number(),
    summary: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    return await ctx.db.insert("tripPlans", {
      userId,
      destination: args.destination,
      startDate: args.startDate,
      endDate: args.endDate,
      travelers: args.travelers,
      summary: args.summary,
    });
  },
});

export const deleteTripPlan = mutation({
  args: { token: v.string(), id: v.id("tripPlans") },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    const plan = await ctx.db.get(args.id);
    if (!plan || plan.userId !== userId) {
      throw new Error("Plan not found or unauthorized");
    }
    await ctx.db.delete(args.id);
    return true;
  },
});

// --- EXPENSES API ---

export const listExpenses = query({
  args: { token: v.string() },
  handler: async (ctx: any, args: any) => {
    try {
      const userId = await getUserIdByToken(ctx, args.token);
      return await ctx.db
        .query("userExpenses")
        .withIndex("by_user", (q: any) => q.eq("userId", userId))
        .collect();
    } catch (e) {
      return [];
    }
  },
});

export const createExpense = mutation({
  args: {
    token: v.string(),
    amount: v.number(),
    category: v.string(),
    description: v.string(),
    date: v.number(),
  },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    return await ctx.db.insert("userExpenses", {
      userId,
      amount: args.amount,
      category: args.category,
      description: args.description,
      date: args.date,
    });
  },
});

export const deleteExpense = mutation({
  args: { token: v.string(), id: v.id("userExpenses") },
  handler: async (ctx: any, args: any) => {
    const userId = await getUserIdByToken(ctx, args.token);
    const expense = await ctx.db.get(args.id);
    if (!expense || expense.userId !== userId) {
      throw new Error("Expense item not found or unauthorized");
    }
    await ctx.db.delete(args.id);
    return true;
  },
});
