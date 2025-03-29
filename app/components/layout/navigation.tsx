"use client";

import type { FunctionComponent } from "react";

import { Link } from "@tanstack/react-router";
import { HandMetal } from "lucide-react";

import { navigationItems } from "@/lib/navigation-items";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton } from "@clerk/tanstack-start";
import { WaitingListTrigger } from "@/components/waiting-list/waiting-list-trigger";

export const NavigationComponent: FunctionComponent = () => {
	const url = import.meta.env.VITE_PLATFORM_URL;

	return (
		<section className="container sticky top-0 z-40 mx-auto flex items-center justify-between bg-background py-8">
			<Link to="/" className="flex items-center gap-2 text-2xl">
				<HandMetal className="h-8 w-8" />
				<span className="hidden sm:block">builder</span>
			</Link>
			<div className="flex items-center gap-8">
				<nav className="hidden lg:block">
					<ul className="flex items-center gap-8">
						{navigationItems.map((item) => (
							<li key={item.label}>
								<Link
									to={item.href}
									aria-label={item.ariaLabel}
									className={cn(
										"underline-hover text-sm after:bg-neutral-50",
										item.disabled && "pointer-events-none opacity-50",
									)}
								>
									{item.label}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<div className="flex items-center gap-4">
					{/* TODO: Add a waiting list trigger and show this when waiting list is enabled */}
					<Button asChild variant="outline">
						<SignInButton forceRedirectUrl={`${url}/dashboard`} />
					</Button>
					<Button asChild>
						<SignUpButton />
					</Button>
					<WaitingListTrigger label="Join the waiting list" />
				</div>
			</div>
		</section>
	);
};
