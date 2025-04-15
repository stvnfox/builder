"use client";

import { useState } from "react";
import { ChevronsUpDown, Plus } from "lucide-react";

import { useViewState, useViewActions } from "@/providers/view-provider";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { PageSwitcherDialog } from "./page-switcher/page-switcher-dialog";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export const PageSwitcher = () => {
	const { isMobile } = useSidebar();
	const { selectedPageId } = useViewState();
	const { pages, setSelectedPageId, isLoading } = useViewActions();
	const [open, setOpen] = useState(false);

	const activePage = pages.find((page) => page.id === selectedPageId);

	if (isLoading) {
		return (
			<SidebarMenu>
				<SidebarMenuItem>
					<SidebarMenuButton size="lg">
						<Skeleton className="aspect-square size-8 rounded-lg" />
						<Skeleton className="h-3 w-24" />
						<ChevronsUpDown className="ml-auto" />
					</SidebarMenuButton>
				</SidebarMenuItem>
			</SidebarMenu>
		);
	}

	if (!activePage) {
		return null;
	}

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<Dialog open={open} onOpenChange={setOpen}>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<SidebarMenuButton
								size="lg"
								className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
							>
								<div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
									<activePage.logo className="size-4" />
								</div>
								<div className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-semibold">
										{activePage.name}
									</span>
									{/* <span className="truncate text-xs">{activePage.plan}</span> */}
								</div>
								<ChevronsUpDown className="ml-auto" />
							</SidebarMenuButton>
						</DropdownMenuTrigger>
						<DropdownMenuContent
							className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
							align="start"
							side={isMobile ? "bottom" : "right"}
							sideOffset={4}
						>
							<DropdownMenuLabel className="text-muted-foreground text-xs">
								Pages
							</DropdownMenuLabel>
							{pages.map((page) => (
								<DropdownMenuItem
									key={page.name}
									onClick={() => setSelectedPageId(page.id)}
									className={cn(
										"cursor-pointer gap-2 p-2",
										page.id === selectedPageId && "cursor-default bg-accent",
									)}
								>
									<div
										className={cn(
											"flex size-6 items-center justify-center rounded-sm border",
											page.id === selectedPageId &&
												"border-primary bg-sidebar-primary text-sidebar-primary-foreground",
										)}
									>
										<page.logo
											className={cn(
												"size-4 shrink-0",
												page.id === selectedPageId &&
													"text-sidebar-primary-foreground",
											)}
										/>
									</div>
									{page.name}
								</DropdownMenuItem>
							))}
							<DropdownMenuSeparator />
							<DialogTrigger asChild>
								<DropdownMenuItem className="cursor-pointer gap-2 p-2">
									<div className="flex size-6 items-center justify-center rounded-md border bg-background">
										<Plus className="size-4" />
									</div>
									<div className="font-medium text-muted-foreground">
										Create new page
									</div>
								</DropdownMenuItem>
							</DialogTrigger>
						</DropdownMenuContent>
					</DropdownMenu>
					<PageSwitcherDialog closeDialog={() => setOpen(false)} />
				</Dialog>
			</SidebarMenuItem>
		</SidebarMenu>
	);
};
