import type { FunctionComponent } from "react";
import { Brush, Search, Settings, TrendingUp } from "lucide-react";

import type { View } from "@/types/views";

import { useViewContext } from "@/providers/view-provider";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export const SettingsNav: FunctionComponent = () => {
	const { setView } = useViewContext();

	const items = [
		{
			title: "General",
			icon: Settings,
			setView: "settings",
		},
		{
			title: "Theme",
			icon: Brush,
			setView: "theme",
		},
		{
			title: "SEO",
			icon: Search,
			setView: "seo",
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
							<SidebarMenuButton
								disabled={item.disabled}
								onClick={() => setView(item.setView as View)}
							>
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
