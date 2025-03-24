import { createFileRoute, redirect, Outlet } from "@tanstack/react-router";

import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

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
			<SidebarProvider>
        <SidebarInset>
          <main>
            <SidebarTrigger className="lg:hidden" />
            <Outlet />
          </main>
        </SidebarInset>
				<AppSidebar />
			</SidebarProvider>
		);
	},
});
