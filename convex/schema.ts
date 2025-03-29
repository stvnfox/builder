import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	waitingList: defineTable({
		email: v.string(),
		name: v.string(),
	}),
});
