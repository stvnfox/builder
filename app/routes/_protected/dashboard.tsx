import { createFileRoute } from "@tanstack/react-router";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";

import { api } from "@convex/_generated/api";

import { DashboardWrapper } from "@/components/dashboard/dashboard-wrapper";

export const Route = createFileRoute("/_protected/dashboard")({
	component: RouteComponent,
});

function RouteComponent() {
	const { data } = useSuspenseQuery(convexQuery(api.tasks.get, {}));

	return <DashboardWrapper />;
}
