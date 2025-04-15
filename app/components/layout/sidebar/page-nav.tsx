import type { FunctionComponent } from "react";
import { Eye, Hammer } from "lucide-react";
import { Link } from "@tanstack/react-router";

import type { View } from "@/types/views";

import { useViewActions, useViewState } from "@/providers/view-provider";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export const PageNav: FunctionComponent = () => {
	const { selectedPageId } = useViewState();
	const { setView } = useViewActions();

	const items = [
		{
			title: "Page builder",
			icon: Hammer,
			setView: "builder",
		},
		{
			title: "Preview",
			icon: Eye,
			url: `/preview/${selectedPageId}`,
		},
	];

	return (
		<SidebarGroup>
			<SidebarGroupContent>
				<SidebarMenu>
					{items.map((item) => (
						<SidebarMenuItem key={item.title}>
							{item.url ? (
								<SidebarMenuButton asChild>
									<Link to={item.url} className="w-full">
										<item.icon className="text-muted-foreground" />
										<span>{item.title}</span>
									</Link>
								</SidebarMenuButton>
							) : (
								<SidebarMenuButton
									onClick={() => setView(item.setView as View)}
								>
									<item.icon className="text-muted-foreground" />
									<span>{item.title}</span>
								</SidebarMenuButton>
							)}
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
};
