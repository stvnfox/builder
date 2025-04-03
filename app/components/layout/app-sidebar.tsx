import type { FunctionComponent } from "react";

import { useViewContext } from "@/providers/view-provider";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
} from "@/components/ui/sidebar";
import { PageSwitcher } from "./page-switcher";
import { AccountNav } from "./sidebar/account-nav";
import { BuilderNav } from "./sidebar/builder-nav";
import { PageNav } from "./sidebar/page-nav";
import { SettingsNav } from "./sidebar/settings-nav";
import { ThemeSwitcher } from "./theme-switcher";

export const AppSidebar: FunctionComponent = () => {
	const { view } = useViewContext();

	return (
		<Sidebar variant="floating" side="right">
			<SidebarHeader>
				<PageSwitcher />
			</SidebarHeader>
			<SidebarContent className="flex flex-col justify-between">
				{view === "builder" ? <BuilderNav /> : <PageNav />}
				<SettingsNav />
			</SidebarContent>
			<SidebarFooter>
				<ThemeSwitcher />
				<AccountNav />
			</SidebarFooter>
		</Sidebar>
	);
};
