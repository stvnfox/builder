import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createNewPage = mutation({
	args: {
		name: v.string(),
		slug: v.string(),
		userId: v.id("user"),
	},
	handler: async (ctx, args) => {
		const { name, slug, userId } = args;

		if (!userId) {
			throw new Error("Unauthorized");
		}

		try {
			await ctx.db.insert("pages", {
				id: crypto.randomUUID(),
				userId,
				name,
				slug,
				createdAt: Date.now(),
			});

			return {
				status: 200,
				message: "Page created successfully",
			};
		} catch (error) {
			console.error(error);

			return {
				status: 500,
				message: `Failed to create page: ${error}`,
			};
		}
	},
});
