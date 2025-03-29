import { createFileRoute } from "@tanstack/react-router";

import { builderConfig } from "config/builder";

import { NavigationComponent } from "@/components/blocks/navigation";
import { HeroComponent } from "@/components/blocks/hero";
import { ProblemsComponent } from "@/components/blocks/problems";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const { navigation, hero, settings, problems } = builderConfig;

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
			<ProblemsComponent
				title={problems.title}
				description={problems.description}
				problems={problems.problems}
			/>
		</>
	);
}
