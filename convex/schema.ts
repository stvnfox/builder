import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	pages: defineTable({
		id: v.string(),
		userId: v.id("user"),
		name: v.string(),
		slug: v.string(),
		updatedAt: v.optional(v.number()),
		createdAt: v.number(),
	}),
	waitingList: defineTable({
		email: v.string(),
		name: v.string(),
	}),
});
