import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    passwordHash: v.string(),
    salt: v.string(),
    name: v.string(),
    phone: v.string(),
  }).index("by_username", ["username"]),

  sessions: defineTable({
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
  }).index("by_token", ["token"]),

  blogs: defineTable({
    title: v.string(),
    slug: v.string(),
    excerpt: v.string(),
    coverImage: v.string(),
    authorName: v.string(),
    authorAvatar: v.string(),
    category: v.string(),
    readTime: v.number(),
    createdAt: v.string(),
    content: v.string(),
    uploadedByUsername: v.string(),
  }).index("by_slug", ["slug"]),

  experiences: defineTable({
    name: v.string(),
    avatar: v.string(),
    location: v.string(),
    rating: v.number(),
    text: v.string(),
    destination: v.string(),
    score: v.number(),
    uploadedByUsername: v.string(),
  }),

  photos: defineTable({
    src: v.string(),
    location: v.string(),
    category: v.string(),
    uploadedBy: v.string(),
    uploadedByUsername: v.string(),
    score: v.number(),
  }),

  discoveredDestinations: defineTable({
    name: v.string(),
    tagline: v.string(),
    category: v.string(),
    locationDetailed: v.string(),
    whyVisit: v.string(),
    bestTimeToVisit: v.string(),
    description: v.string(),
    howToReach: v.string(),
    nearestTransport: v.string(),
    entryFee: v.number(),
    averageCost: v.number(),
    isFree: v.boolean(),
    facilities: v.array(v.string()),
    coverImage: v.string(),
    thingsToCarry: v.string(),
    thingsToAvoid: v.string(),
    safetyTips: v.string(),
    tags: v.array(v.string()),
    submittedBy: v.string(),
    submittedByUsername: v.string(),
    status: v.string(), // "pending" | "approved"
    creationTime: v.number(),
  }),

  wishlist: defineTable({
    userId: v.id("users"),
    slug: v.string(),
  }).index("by_user", ["userId"]),

  visitedPlaces: defineTable({
    userId: v.id("users"),
    slug: v.string(),
  }).index("by_user", ["userId"]),

  visitedLogs: defineTable({
    userId: v.id("users"),
    slug: v.string(),
    rating: v.number(),
    expense: v.number(),
    visitedHighlights: v.string(),
    foodName: v.string(),
    foodRating: v.number(),
    currentWeather: v.string(),
    experience: v.string(),
  }).index("by_user", ["userId"]),

  tripPlans: defineTable({
    userId: v.id("users"),
    destination: v.string(),
    startDate: v.string(),
    endDate: v.string(),
    travelers: v.number(),
    summary: v.string(),
  }).index("by_user", ["userId"]),

  userExpenses: defineTable({
    userId: v.id("users"),
    amount: v.number(),
    category: v.string(),
    description: v.string(),
    date: v.number(),
  }).index("by_user", ["userId"]),
});
