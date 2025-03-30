import { createFileRoute } from "@tanstack/react-router";

import { CookiePolicyContent } from "@/components/layout/cookie-policy-content";

export const Route = createFileRoute("/_policies/cookie-policy")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section>
			<h1 className="mb-4 font-regular text-4xl tracking-tighter md:text-6xl">
				Cookie Policy - Builder
			</h1>
			<CookiePolicyContent />
		</section>
	);
}
