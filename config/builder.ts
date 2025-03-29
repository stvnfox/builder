import { HandMetal } from "lucide-react";

export const builderConfig = {
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
		showWaitingList: true,
	},
};
