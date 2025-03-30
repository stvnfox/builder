"use client";

import type { FunctionComponent } from "react";

import { Link } from "@tanstack/react-router";
import {
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";

type FooterComponentProps = {
	name: string;
	links: {
		label: string;
		href: string;
	}[];
	socials: Record<string, string>;
};

export const FooterComponent: FunctionComponent<FooterComponentProps> = ({
	name,
	links,
	socials,
}) => {
	const getLinkIcon = (key: string) => {
		switch (key) {
			case "x":
				return <FaXTwitter size={20} />;
			case "instagram":
				return <FaInstagram size={20} />;
			case "linkedin":
				return <FaLinkedin size={20} />;
			case "facebook":
				return <FaFacebook size={20} />;
			case "youtube":
				return <FaYoutube size={20} />;
			default:
				return null;
		}
	};

	const socialLinks = Object.entries(socials).map(([key, value]) => ({
		key,
		url: value,
	}));

	return (
		<footer className="pb-10">
			<div className="mb-10 h-px w-full rounded-lg bg-foreground/20" />
			<div className="flex flex-col items-center justify-between gap-4 text-sm md:gap-8 lg:flex-row">
				<div className="order-3 flex flex-row gap-4 lg:order-1">
					<div className="mr-4 hidden text-primary lg:block dark:text-foreground">
						&copy; {new Date().getFullYear()} {name}. All rights reserved
					</div>
					{links.map((link) => (
						<Link
							key={link.label}
							to={link.href}
							className="underline-hover text-sm after:bg-primary dark:after:bg-foreground"
						>
							{link.label}
						</Link>
					))}
				</div>
				<div className="order-1 lg:hidden">
					&copy; {new Date().getFullYear()} {name}. All rights reserved
				</div>
				<div className="order-2 flex flex-row gap-4 lg:order-3">
					{socialLinks.map((social) => (
						<Link
							to={social.url ?? ""}
							key={social.key}
							target="_blank"
							rel="noopener noreferrer"
							className="transition-colors duration-300 hover:text-muted-foreground"
						>
							{getLinkIcon(social.key)}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};
