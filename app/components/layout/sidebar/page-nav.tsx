import type { FunctionComponent } from "react";
import { Eye, Hammer } from "lucide-react";

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

export const PageNav: FunctionComponent = () => {
	const { setView } = useViewContext();

	const items = [
		{
			title: "Builder",
			icon: Hammer,
			setView: "builder",
		},
		{
			title: "Preview",
			icon: Eye,
			setView: "preview",
		},
	];

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Page</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton onClick={() => setView(item.setView as View)}>
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
