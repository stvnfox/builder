import { createFileRoute } from "@tanstack/react-router";

import { builderConfig } from "config/builder";

import { NavigationComponent } from "@/components/blocks/navigation";
import { HeroComponent } from "@/components/blocks/hero";
import { ProblemsComponent } from "@/components/blocks/problems";
import { SolutionComponent } from "@/components/blocks/solution";
import { BenefitsComponent } from "@/components/blocks/benefits";
import { ActionsComponent } from "@/components/blocks/actions";
import { FAQComponent } from "@/components/blocks/faq";
import { CallToActionComponent } from "@/components/blocks/call-to-action";
import { FooterComponent } from "@/components/blocks/footer";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	const {
		navigation,
		hero,
		settings,
		problems,
		solution,
		benefits,
		actions,
		faq,
		cta,
		footer,
	} = builderConfig;

	return (
		<div className="container mx-auto px-4">
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
			<SolutionComponent
				title={solution.title}
				description={solution.description}
				image={solution.image}
			/>
			<BenefitsComponent
				title={benefits.title}
				description={benefits.description}
				items={benefits.items}
			/>
			<ActionsComponent
				title={actions.title}
				subtitle={actions.subtitle}
				image={actions.image}
				actions={actions.actions}
			/>
			<FAQComponent
				title={faq.title}
				description={faq.description}
				faqs={faq.faqs}
			/>
			<CallToActionComponent
				title={cta.title}
				description={cta.description}
				image={cta.image}
				button={cta.button}
				showWaitingList={settings.showWaitingList}
				waitingListLabel={settings.waitingListLabel}
			/>
			<FooterComponent
				name={navigation.title}
				links={footer.links}
				socials={footer.socials}
			/>
		</div>
	);
}
