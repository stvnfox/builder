import { createFileRoute, redirect } from "@tanstack/react-router";
import { SignIn } from "@clerk/tanstack-start";

export const Route = createFileRoute("/sign-in")({
	beforeLoad: ({ context }) => {
		if (context.userId) {
			throw redirect({ to: "/dashboard" });
		}
	},
	component: RouteComponent,
});

function RouteComponent() {
	const dashboardUrl = `${window.location.origin}/dashboard`;

	return (
		<div className="flex min-h-screen min-w-screen items-center justify-center">
			<SignIn routing="hash" forceRedirectUrl={dashboardUrl} />
		</div>
	);
}
