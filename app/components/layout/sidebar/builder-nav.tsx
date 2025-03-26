import type { FunctionComponent } from "react";
import { DollarSign, HelpCircle } from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";

export const BuilderNav: FunctionComponent = () => {
	const uniqueItems = [
		{
			title: "Pricing",
			icon: DollarSign,
			disabled: true,
		},
		{
			title: "Frequently asked questions",
			icon: HelpCircle,
			disabled: true,
		},
	];

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Builder components</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{uniqueItems.map((item) => (
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
