import type { FunctionComponent } from "react";

import { ChevronsUpDown } from "lucide-react";
import { useUser, SignOutButton } from "@clerk/tanstack-start";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export const AccountNav: FunctionComponent = () => {
  const { user } = useUser();
  const clerkUrl = import.meta.env.VITE_CLERK_ISSUER_URL;
  const platformUrl = import.meta.env.VITE_PLATFORM_URL;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="h-auto">
            <SidebarMenuButton className="font-medium">
              <Avatar>
                <AvatarImage src={user?.imageUrl} alt={user?.username ?? ""} />
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
  );
};
