"use client";

import type { FunctionComponent } from "react";
import type { LucideIcon } from "lucide-react";

import { createElement } from "react";
import { Link } from "@tanstack/react-router";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/tanstack-start";
import { WaitingListTrigger } from "@/components/waiting-list/waiting-list-trigger";

type NavigationItem = {
	label: string;
	href: string;
	ariaLabel: string;
	disabled?: boolean;
};

type NavigationComponentProps = {
	title: string;
	links: NavigationItem[];
	showWaitingList: boolean;
	icon?: LucideIcon;
	signInRedirectUrl?: string;
	signUpRedirectUrl?: string;
};

export const NavigationComponent: FunctionComponent<
	NavigationComponentProps
> = ({
	showWaitingList,
	links,
	title,
	icon,
	signInRedirectUrl,
	signUpRedirectUrl,
}) => {
	return (
		<section className="container sticky top-0 z-40 mx-auto flex items-center justify-between bg-background py-8">
			<Link to="/" className="flex items-center gap-2 text-2xl">
				{icon && createElement(icon, { className: "h-8 w-8" })}
				<span className="hidden sm:block">{title}</span>
			</Link>
			<div className="flex items-center gap-8">
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-8">
						{links.map((link) => (
							<li key={link.label}>
								<Link
									to={link.href}
									aria-label={link.ariaLabel}
									className={cn(
										"underline-hover text-sm after:bg-neutral-50",
										link.disabled && "pointer-events-none opacity-50",
									)}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center gap-4">
					{showWaitingList ? (
						<WaitingListTrigger label="Join the waiting list" />
					) : (
						<>
							<Button asChild variant="outline">
								<SignInButton forceRedirectUrl={signInRedirectUrl ?? ""} />
							</Button>
							<Button asChild>
								<SignUpButton forceRedirectUrl={signUpRedirectUrl ?? ""} />
							</Button>
						</>
					)}
				</div>
			</div>
		</section>
	);
};
