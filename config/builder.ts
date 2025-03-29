import { HandMetal } from "lucide-react";

import heroImage from "@/assets/header.svg?url";

export const builderConfig = {
	settings: {
		showWaitingList: true,
		waitingListLabel: "I want early access!",
	},
	navigation: {
		title: "builder",
		icon: HandMetal,
		links: [
			{
				label: "Frequently asked questions",
				ariaLabel: "Click here to read the frequently asked questions",
				href: "/#faq",
				disabled: false,
			},
			// {
			//   label: "Blogs",
			//   ariaLabel: "Click here to read the blogs",
			//   href: "/blogs",
			// },
			{
				label: "Roadmap (coming soon)",
				ariaLabel: "Click here to read about MedixChat roadmap",
				href: "/",
				disabled: true,
			},
		],
	},
	hero: {
		title: "Launch your new landing page in minutes!",
		description:
			"Introducing Builder—the intuitive platform that empowers you to create sleek, professional landing pages for your projects in minutes, not days. No coding skills required.",
		image: {
			url: heroImage,
		},
		callToAction: {
			label: "Start building now!",
			// TODO: Add the link to the signin page
			href: "/",
			openInNewTab: false,
		},
	},
	problems: {
		title: "Problems we solve",
		description:
			"Building a landing page should be easy, but too often, it’s complicated, time-consuming, and frustrating. With Builder, we simplify the process so you can focus on what matters—your message.",
		problems: [
			"I need to launch quickly but quality takes time",
			"My designs look amateur compared to competitors",
			"Coding feels overwhelming and I don't know where to start",
			"Making the page accessible seems complex",
			"Balancing information and simplicity is difficult",
			"I'm unsure about the best layout for conversion",
		],
	},
};
