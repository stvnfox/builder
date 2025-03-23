import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignIn } from "@clerk/tanstack-start";

export const Route = createFileRoute("/sign-in")({
  beforeLoad: ({ context }) => {
    if (context.userId) {
      throw redirect({ to: "/" });
    }
  },
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex min-h-screen min-w-screen items-center justify-center">
      <SignIn routing="hash" forceRedirectUrl={window.location.href} />
    </div>
  );
}
