import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getPagesByUserId = query({
	args: {
		userId: v.string(),
	},
	handler: async (ctx, args) => {
		const { userId } = args;

		if (!userId) {
			throw new Error("Unauthorized");
		}

		try {
			const pages = await ctx.db
				.query("pages")
				.filter((q) => q.eq(q.field("userId"), userId))
				.collect();

			return {
				status: 200,
				message: "Pages fetched successfully",
				pages,
			};
		} catch (error) {
			console.error(error);

			return {
				status: 500,
				message: `Failed to get pages: ${error}`,
			};
		}
	},
});

export const createNewPage = mutation({
	args: {
		name: v.string(),
		slug: v.string(),
		userId: v.string(),
	},
	handler: async (ctx, args) => {
		const { name, slug, userId } = args;

		if (!userId) {
			throw new Error("Unauthorized");
		}

		try {
			const pageId = crypto.randomUUID();

			await ctx.db.insert("pages", {
				id: pageId,
				userId,
				name,
				slug,
				createdAt: Date.now(),
			});

			return {
				status: 200,
				message: "Page created successfully",
				pageId,
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
