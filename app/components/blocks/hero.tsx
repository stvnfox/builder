import type { FunctionComponent } from "react";

import { Link } from "@tanstack/react-router";
// import { usePostHog } from "posthog-js/react";

import { Button } from "@/components/ui/button";
import { WaitingListTrigger } from "@/components/blocks/waiting-list/waiting-list-trigger";

type HeroComponentProps = {
	title: string;
	description: string;
	image: {
		url: string;
		alt?: string;
	};
	callToAction: {
		label: string;
		href: string;
		openInNewTab: boolean;
	};
	showWaitingList?: boolean;
	waitingListLabel?: string;
};

export const HeroComponent: FunctionComponent<HeroComponentProps> = ({
	title,
	description,
	image,
	callToAction,
	showWaitingList,
	waitingListLabel,
}: HeroComponentProps) => {
	//   const ph = usePostHog();

	return (
		<div className="my-20 lg:my-40">
			<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-8">
						<h1 className="text-balance text-left font-regular text-5xl leading-[1.1]! tracking-tighter md:text-7xl lg:max-w-lg">
							{title}
						</h1>
						<p className="max-w-xl text-left text-muted-foreground text-xl leading-relaxed tracking-tight">
							{description}
						</p>
					</div>
					<div className="flex flex-row gap-4">
						<Button
							asChild
							size="xl"
							// onClick={() => ph.capture("clicked on the sign up button")}
						>
							{showWaitingList ? (
								<WaitingListTrigger
									label={waitingListLabel ?? "I want early access!"}
									size="xl"
								/>
							) : (
								<Link
									to={callToAction.href}
									target={callToAction.openInNewTab ? "_blank" : "_self"}
								>
									{callToAction.label}
								</Link>
							)}
						</Button>
					</div>
				</div>
				<img
					src={image.url}
					alt={image.alt ?? ""}
					loading="lazy"
					className="rounded-lg object-contain"
				/>
			</div>
		</div>
	);
};
