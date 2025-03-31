import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";

import { ViewProvider } from "@/providers/view-provider";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";
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
	errorComponent: ({ error }) => {
		throw error;
	},
	component: () => {
		return (
			<ViewProvider>
				<SidebarProvider>
					<SidebarInset>
						<main>
							<SidebarTrigger className="absolute top-2 right-12 border-sidebar-border! bg-transparent! shadow-sm lg:hidden" />
							<div className="mt-16 lg:mt-0">
								<Outlet />
							</div>
							<div className="absolute top-2 right-2 lg:right-0">
								<ThemeSwitcher />
							</div>
						</main>
					</SidebarInset>
					<AppSidebar />
				</SidebarProvider>
			</ViewProvider>
		);
	},
});
