"use client";

import { useState, type FunctionComponent } from "react";
// import { usePostHog } from "posthog-js/react";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { WaitingListForm } from "@/components/waiting-list/waiting-list-form";

type WaitingListTriggerProps = {
	label: string;
	effect?: boolean;
};

export const WaitingListTrigger: FunctionComponent<WaitingListTriggerProps> = ({
	label,
	effect = false,
}) => {
	// const ph = usePostHog();

	const [open, setOpen] = useState(false);

	const onOpenChange = (value: boolean, event?: string) => {
		setOpen(value);

		// if (!value && !event) ph.capture("closed the waiting list dialog");
	};

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger
				asChild
				// onClick={() => ph.capture("clicked on the waiting list trigger")}
			>
				{effect ? (
					<div className="group relative overflow-hidden rounded-md p-[2px]">
						<div className="absolute inset-0 z-[-1] h-full w-full animate-rotate rounded-full bg-[conic-gradient(rgba(255,255,255,0.4)_20deg,transparent_120deg)] group-hover:bg-none" />
						<Button>{label}</Button>
					</div>
				) : (
					<Button>{label}</Button>
				)}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Join the waiting list</DialogTitle>
					<DialogDescription>
						Be the first to know when we launch! Join our waiting list to get
						early access, exclusive updates, and a sneak peek of what's coming.
					</DialogDescription>
				</DialogHeader>
				<WaitingListForm
					onSuccess={() => onOpenChange(false, "subscribed_successfully")}
				/>
			</DialogContent>
		</Dialog>
	);
};
