import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitingList = mutation({
	args: {
		email: v.string(),
		name: v.string(),
	},
	handler: async (ctx, args) => {
		const { email, name } = args;
		const waitingList = await ctx.db.query("waitingList").collect();

		if (waitingList.find((item) => item.email === email)) {
			return { status: 409 };
		}

		await ctx.db.insert("waitingList", {
			email,
			name,
		});

		return { status: 200 };
	},
});
