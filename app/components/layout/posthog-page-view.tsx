"use client";

import { useEffect, Suspense } from "react";
import { usePostHog } from "posthog-js/react";
import { useLocation } from "@tanstack/react-router";

function PostHogPageView(): null {
	const pathname = useLocation().pathname;
	const searchParams = useLocation().searchStr;
	const posthog = usePostHog();

	// Track pageviews
	useEffect(() => {
		if (pathname && posthog) {
			let url = window.origin + pathname;
			if (searchParams) {
				url = `${url}?${searchParams}`;
			}

			posthog.capture("$pageview", { $current_url: url });
		}
	}, [pathname, searchParams, posthog]);

	return null;
}

export default function SuspendedPostHogPageView() {
	return (
		<Suspense fallback={null}>
			<PostHogPageView />
		</Suspense>
	);
}
