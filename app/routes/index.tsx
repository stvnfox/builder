import { createFileRoute } from "@tanstack/react-router";
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
  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">builder</h1>
      <SignedIn>
        <UserButton />
        <Button asChild>
          <SignOutButton />
        </Button>
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
