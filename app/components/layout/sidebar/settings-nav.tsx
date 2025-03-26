import type { FunctionComponent } from "react";
import { Brush, Search, Settings, TrendingUp } from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export const SettingsNav: FunctionComponent = () => {
	const items = [
		{
			title: "General",
			icon: Settings,
		},
		{
			title: "Theme",
			icon: Brush,
		},
		{
			title: "SEO",
			icon: Search,
		},
		{
			title: "Analytics (coming soon)",
			icon: TrendingUp,
			disabled: true,
		},
	];

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Settings</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton disabled={item.disabled}>
								<item.icon className="text-muted-foreground" />
								<span>{item.title}</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
