import { createFileRoute } from "@tanstack/react-router";

import { builderConfig } from "config/builder";

import { NavigationComponent } from "@/components/layout/navigation";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const { navigation } = builderConfig;

	return (
		<>
			<NavigationComponent
				title={navigation.title}
				icon={navigation.icon}
				links={navigation.links}
				showWaitingList={navigation.showWaitingList}
			/>
		</>
	);
}
