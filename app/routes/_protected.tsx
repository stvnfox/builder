import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { convexQuery } from "@convex-dev/react-query";
import { api } from "@convex/_generated/api";

import { ViewProvider } from "@/providers/view-provider";

import { AppSidebar } from "@/components/layout/app-sidebar";

import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";

export const Route = createFileRoute("/_protected")({
	beforeLoad: ({ context }) => {
		if (!context.userId) {
			throw redirect({ to: "/sign-in" });
		}
	},
	loader: async (opts) => {
		await opts.context.queryClient.ensureQueryData(
			convexQuery(api.pages.getPagesByUserId, {
				userId: opts.context.userId as string,
			}),
		);
	},
	errorComponent: ({ error }) => {
		throw error;
	},
	component: () => {
		return (
			<ViewProvider>
				<SidebarProvider>
					<SidebarInset>
						<main>
							<SidebarTrigger className="absolute top-2 right-12 border-sidebar-border! bg-transparent! shadow-sm md:hidden" />
							<div className="mt-16 lg:mt-0">
								<Outlet />
							</div>
						</main>
					</SidebarInset>
					<AppSidebar />
				</SidebarProvider>
			</ViewProvider>
		);
	},
});
