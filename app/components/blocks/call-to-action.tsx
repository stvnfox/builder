import type { FunctionComponent } from "react";
import { Link } from "@tanstack/react-router";
// import { usePostHog } from "posthog-js/react";

import { Button } from "@/components/ui/button";
import { WaitingListTrigger } from "@/components/blocks/waiting-list/waiting-list-trigger";

type CallToActionComponentProps = {
	title: string;
	description: string;
	image: {
		url: string;
		alt?: string;
	};
	button: {
		label: string;
		href: string;
		openInNewTab: boolean;
	};
	showWaitingList?: boolean;
	waitingListLabel?: string;
};
export const CallToActionComponent: FunctionComponent<
	CallToActionComponentProps
> = ({
	title,
	description,
	image,
	button,
	showWaitingList = false,
	waitingListLabel = "Join waiting list",
}) => {
	return (
		<div className="container my-20 lg:my-40">
			<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-8">
						<h2 className="text-balance text-left font-regular text-5xl leading-[1.1]! tracking-tighter md:text-7xl lg:max-w-lg">
							{title}
						</h2>
						<p className="[&_a>span]:no-underline! [&_a]:underline-hover max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight [&_a]:text-primary [&_a]:after:bg-primary">
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
								<WaitingListTrigger label={waitingListLabel} size="xl" />
							) : (
								<Link
									to={button.href}
									target={button.openInNewTab ? "_blank" : "_self"}
								>
									{button.label}
								</Link>
							)}
						</Button>
					</div>
				</div>
				<img
					loading="lazy"
					src={image.url}
					alt={image.alt ?? ""}
					className="h-full w-full object-contain"
				/>
			</div>
		</div>
	);
};
