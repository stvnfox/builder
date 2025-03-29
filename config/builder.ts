import { HandMetal } from "lucide-react";

import solutionImage from "@/assets/drawing-1.svg?url";
import heroImage from "@/assets/drawing-2.svg?url";
import actionsImage from "@/assets/drawing-5.svg?url";
import ctaImage from "@/assets/drawing-10.svg?url";

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
		title: "Launch Your New Landing Page in Minutes!",
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
		title: "Problems We Solve",
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
	solution: {
		title: "The Simple Solution to Building Stunning Landing Pages",
		description:
			"With Builder, creating a beautiful, high-converting landing page is effortless. Whether you’re a business owner, marketer, or entrepreneur, you no longer need technical skills or endless hours to build a page that works. Our drag-and-drop interface, customizable templates, and mobile optimization tools give you everything you need to get online fast and look great doing it. Build your landing page in minutes, not hours, and focus on growing your business.",
		image: {
			url: solutionImage,
		},
	},
	benefits: {
		title: "Why Choose Builder?",
		description:
			"Builder is designed to save you time, effort, and stress while creating a landing page that works. Here are just a few reasons why Builder is the perfect choice for your next landing page:",
		items: [
			{
				title: "Quick Setup",
				description:
					"Get your landing page live in minutes, not days, with our intuitive drag-and-drop builder.",
			},
			{
				title: "Professional Designs",
				description:
					"Choose from a variety of customizable templates, designed to look great on any device.",
			},
			{
				title: "Easy Scalability",
				description:
					"As your business grows, Builder grows with you—no need to rebuild your pages from scratch.",
			},
		],
	},
	actions: {
		title: "Get Started with Builder Today",
		subtitle: "How it Works",
		image: {
			url: actionsImage,
		},
		actions: [
			{
				title: "Sign Up and Create a Page",
				description:
					"Create your account in seconds and get instant access to all of Builder’s features.",
			},
			{
				title: "Choose Your Template",
				description:
					"Select from a variety of professionally designed templates to get started with a great layout.",
			},
			{
				title: "Customize Your Page",
				description:
					"Use our easy drag-and-drop tools to customize your page and add your own content. Need help with your content? We've got you covered with our built-in AI assistant.",
			},
			{
				title: "Publish Your Page",
				description:
					"Once you’re happy with your landing page, publish it with a single click and share it with the world.",
			},
		],
	},
	faq: {
		title: "Frequently Asked Questions",
		description:
			"Have questions about using Builder? We've got you covered. Below are some of the most common questions we get from our users. If you don’t find your answer here, feel free to reach out to us!",
		faqs: [
			{
				question: "Do I need coding skills to use Builder?",
				answer:
					"No, Builder is designed for everyone, no coding skills required. Simply drag, drop, and customize your content.",
			},
			{
				question: "Can I use my own domain with Builder?",
				answer:
					"Yes, you can easily connect your own domain to your landing page, making it fully branded to your business.",
			},
			{
				question: "Is Builder mobile-friendly?",
				answer:
					"Absolutely! All pages built with Builder are automatically optimized for mobile devices.",
			},
			{
				question: "How long does it take to create a landing page?",
				answer:
					"You can have a fully functional landing page live in minutes, thanks to our easy-to-use interface and templates.",
			},
			{
				question: "Can I use Builder's AI assistant to write my content?",
				answer:
					"Yes, Builder's AI assistant is a tool that helps you create content for your landing page. It uses natural language processing to understand your needs and generate content that is relevant to your business.",
			},
		],
	},
	cta: {
		title: "Ready to Build Your Perfect Landing Page?",
		description:
			"Don’t wait any longer! Sign up today and start building a landing page that will help your business grow. With Builder, you can have a beautiful, high-converting page live in minutes—no coding required.",
		image: {
			url: ctaImage,
		},
		button: {
			label: "Get started now!",
			href: "/",
			openInNewTab: false,
		},
	},
};
