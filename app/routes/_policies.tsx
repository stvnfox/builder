import { createFileRoute, Outlet } from "@tanstack/react-router";

import { builderConfig } from "config/builder";

import { NavigationComponent } from "@/components/blocks/navigation";
import { FooterComponent } from "@/components/blocks/footer";

export const Route = createFileRoute("/_policies")({
	component: RouteComponent,
});

function RouteComponent() {
	const { navigation, settings, footer } = builderConfig;

	return (
		<div className="container mx-auto px-4">
			<NavigationComponent
				title={navigation.title}
				icon={navigation.icon}
				links={navigation.links}
				showWaitingList={settings.showWaitingList}
			/>
			<Outlet />
			<FooterComponent
				links={footer.links}
				socials={footer.socials}
				name={navigation.title}
			/>
		</div>
	);
}
