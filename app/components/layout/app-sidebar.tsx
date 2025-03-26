import type { FunctionComponent } from "react";
import { Home } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { PageSwitcher } from "./page-switcher";
import { AccountNav } from "./sidebar/account-nav";
import { BuilderNav } from "./sidebar/builder-nav";
import { SettingsNav } from "./sidebar/settings-nav";

export const AppSidebar: FunctionComponent = () => {
	const pages = [
		{
			name: "Landing page",
			logo: Home,
		},
		{
			name: "Landing page 2",
			logo: Home,
		},
	];

	return (
		<Sidebar variant="floating" side="right">
			<SidebarHeader>
				<PageSwitcher pages={pages} />
			</SidebarHeader>
			<SidebarContent>
				<BuilderNav />
				<SettingsNav />
			</SidebarContent>
			<SidebarFooter>
				<AccountNav />
			</SidebarFooter>
		</Sidebar>
	);
};
