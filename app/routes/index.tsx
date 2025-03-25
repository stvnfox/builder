import { createFileRoute } from "@tanstack/react-router";
import { dark } from "@clerk/themes";

import { useTheme } from "@/hooks/use-theme";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/tanstack-start";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-2xl">builder</h1>
      <SignedIn>
        <div className="flex gap-2">
          <UserButton
            appearance={{
              baseTheme: theme === "dark" ? dark : undefined,
            }}
          />
          <Button asChild>
            <SignOutButton />
          </Button>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex gap-2">
          <Button asChild>
            <SignUpButton />
          </Button>
          <Button asChild>
            <SignInButton />
          </Button>
        </div>
      </SignedOut>
    </div>
  );
}
