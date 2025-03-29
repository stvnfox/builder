import { createFileRoute } from "@tanstack/react-router";

import { builderConfig } from "config/builder";

import { NavigationComponent } from "@/components/blocks/navigation/navigation";
import { HeroComponent } from "@/components/blocks/hero/hero";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const { navigation, hero, settings } = builderConfig;

	return (
		<>
			<NavigationComponent
				title={navigation.title}
				icon={navigation.icon}
				links={navigation.links}
				showWaitingList={settings.showWaitingList}
			/>
			<HeroComponent
				title={hero.title}
				description={hero.description}
				image={hero.image}
				callToAction={hero.callToAction}
				showWaitingList={settings.showWaitingList}
			/>
		</>
	);
}
