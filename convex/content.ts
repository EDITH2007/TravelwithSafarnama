import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// --- BLOGS API ---

export const listBlogs = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("blogs").collect();
  },
});

export const createBlog = mutation({
  args: {
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
  },
  handler: async (ctx: any, args: any) => {
    const blogId = await ctx.db.insert("blogs", {
      title: args.title,
      slug: args.slug,
      excerpt: args.excerpt,
      coverImage: args.coverImage,
      authorName: args.authorName,
      authorAvatar: args.authorAvatar,
      category: args.category,
      readTime: args.readTime,
      createdAt: args.createdAt,
      content: args.content,
      uploadedByUsername: args.uploadedByUsername,
    });
    return blogId;
  },
});

// --- EXPERIENCES API ---

export const listExperiences = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("experiences").collect();
  },
});

export const createExperience = mutation({
  args: {
    name: v.string(),
    avatar: v.string(),
    location: v.string(),
    rating: v.number(),
    text: v.string(),
    destination: v.string(),
    score: v.number(),
    uploadedByUsername: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    const experienceId = await ctx.db.insert("experiences", {
      name: args.name,
      avatar: args.avatar,
      location: args.location,
      rating: args.rating,
      text: args.text,
      destination: args.destination,
      score: args.score,
      uploadedByUsername: args.uploadedByUsername,
    });
    return experienceId;
  },
});

// --- PHOTOS API ---

export const listPhotos = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("photos").collect();
  },
});

export const uploadPhoto = mutation({
  args: {
    src: v.string(),
    location: v.string(),
    category: v.string(),
    uploadedBy: v.string(),
    uploadedByUsername: v.string(),
    score: v.number(),
  },
  handler: async (ctx: any, args: any) => {
    const photoId = await ctx.db.insert("photos", {
      src: args.src,
      location: args.location,
      category: args.category,
      uploadedBy: args.uploadedBy,
      uploadedByUsername: args.uploadedByUsername,
      score: args.score,
    });
    return photoId;
  },
});

export const deletePhoto = mutation({
  args: {
    id: v.id("photos"),
  },
  handler: async (ctx: any, args: any) => {
    await ctx.db.delete(args.id);
    return true;
  },
});

// --- DISCOVERED DESTINATIONS API ---

export const listDiscoveries = query({
  args: {},
  handler: async (ctx: any) => {
    return await ctx.db.query("discoveredDestinations").collect();
  },
});

export const submitDiscovery = mutation({
  args: {
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
    status: v.string(),
    creationTime: v.number(),
  },
  handler: async (ctx: any, args: any) => {
    const discoveryId = await ctx.db.insert("discoveredDestinations", {
      name: args.name,
      tagline: args.tagline,
      category: args.category,
      locationDetailed: args.locationDetailed,
      whyVisit: args.whyVisit,
      bestTimeToVisit: args.bestTimeToVisit,
      description: args.description,
      howToReach: args.howToReach,
      nearestTransport: args.nearestTransport,
      entryFee: args.entryFee,
      averageCost: args.averageCost,
      isFree: args.isFree,
      facilities: args.facilities,
      coverImage: args.coverImage,
      thingsToCarry: args.thingsToCarry,
      thingsToAvoid: args.thingsToAvoid,
      safetyTips: args.safetyTips,
      tags: args.tags,
      submittedBy: args.submittedBy,
      submittedByUsername: args.submittedByUsername,
      status: args.status,
      creationTime: args.creationTime,
    });
    return discoveryId;
  },
});

export const updateDiscoveryStatus = mutation({
  args: {
    id: v.id("discoveredDestinations"),
    status: v.string(),
  },
  handler: async (ctx: any, args: any) => {
    await ctx.db.patch(args.id, {
      status: args.status,
    });
    return true;
  },
});

export const deleteDiscovery = mutation({
  args: {
    id: v.id("discoveredDestinations"),
  },
  handler: async (ctx: any, args: any) => {
    await ctx.db.delete(args.id);
    return true;
  },
});

export const updateDiscovery = mutation({
  args: {
    id: v.id("discoveredDestinations"),
    name: v.optional(v.string()),
    tagline: v.optional(v.string()),
    category: v.optional(v.string()),
    locationDetailed: v.optional(v.string()),
    whyVisit: v.optional(v.string()),
    bestTimeToVisit: v.optional(v.string()),
    description: v.optional(v.string()),
    howToReach: v.optional(v.string()),
    nearestTransport: v.optional(v.string()),
    entryFee: v.optional(v.number()),
    averageCost: v.optional(v.number()),
    isFree: v.optional(v.boolean()),
    facilities: v.optional(v.array(v.string())),
    coverImage: v.optional(v.string()),
    thingsToCarry: v.optional(v.string()),
    thingsToAvoid: v.optional(v.string()),
    safetyTips: v.optional(v.string()),
    tags: v.optional(v.array(v.string())),
    status: v.optional(v.string()),
  },
  handler: async (ctx: any, args: any) => {
    const { id, ...patch } = args;
    await ctx.db.patch(id, patch);
    return true;
  },
});
