import { createFileRoute } from "@tanstack/react-router";

import { NavigationComponent } from "@/components/layout/navigation";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<>
			<NavigationComponent />
		</>
	);
}
