import type { FunctionComponent } from "react";
import { Brush, ChevronsUpDown, Home, Search, TrendingUp } from "lucide-react";
import { SignOutButton, useUser } from "@clerk/tanstack-start";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { PageSwitcher } from "./page-switcher";
import { SettingsNav } from "./sidebar/settings-nav";

export const AppSidebar: FunctionComponent = () => {
  const { user } = useUser();
  const clerkUrl = import.meta.env.VITE_CLERK_ISSUER_URL;
  const platformUrl = import.meta.env.VITE_PLATFORM_URL;

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
        <SettingsNav />
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="h-auto">
                <SidebarMenuButton className="font-medium">
                  <Avatar>
                    <AvatarImage
                      src={user?.imageUrl}
                      alt={user?.username ?? ""}
                    />
                    <AvatarFallback>{user?.username?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {user?.username ?? ""}
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="top" className="w-[224px]">
                <DropdownMenuItem asChild>
                  <a
                    href={`${clerkUrl}/user?redirect_url=${platformUrl}/dashboard`}
                  >
                    Account
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <SignOutButton>
                    <span>Sign out</span>
                  </SignOutButton>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
