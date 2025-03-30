import type { ReactNode } from "react";
import type { QueryClient } from "@tanstack/react-query";
import type { ConvexQueryClient } from "@convex-dev/react-query";
import type { ConvexReactClient } from "convex/react";

import {
	createRootRouteWithContext,
	useRouteContext,
} from "@tanstack/react-router";
import { Outlet, HeadContent, Scripts } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ClerkProvider, useAuth } from "@clerk/tanstack-start";
import { getAuth } from "@clerk/tanstack-start/server";
import { getWebRequest } from "@tanstack/react-start/server";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Toaster } from "@/components/ui/sonner";

import { useTheme } from "@/hooks/use-theme";

import appCss from "@/main.css?url";

const CLERK_PUBLISHABLE_KEY = (import.meta.env as Record<string, string>)
	.VITE_CLERK_PUBLISHABLE_KEY;

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
	try {
		const request = getWebRequest();
		if (!request) {
			throw new Error("No web request found");
		}
		const auth = await getAuth(request);
		const token = await auth.getToken({ template: "convex" });

		return {
			userId: auth.userId,
			token,
		};
	} catch (e) {
		console.error("Auth error:", e);
		return {
			userId: null,
			token: null,
		};
	}
});

export const Route = createRootRouteWithContext<{
	queryClient: QueryClient;
	convexClient: ConvexReactClient;
	convexQueryClient: ConvexQueryClient;
}>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Buildr - the easiest way to build your landing page",
			},
			{
				name: "og:title",
				content: "Buildr - the easiest way to build your landing page",
			},
			{
				name: "og:description",
				content:
					"Transform your ideas into high-converting landing pages. Save time and money with our professional builder - no design or coding skills needed.",
			},
			// TODO: Add og:image
			// {
			// 	name: "og:image",
			// 	content: "https://www.build-r.dev/og-image.png",
			// },
			{
				name: "og:url",
				content: "https://www.build-r.dev",
			},
			{
				name: "og:type",
				content: "website",
			},
			{
				name: "keywords",
				content:
					"landing page builder, landing page creator, landing page design, landing page development, landing page builder software, landing page builder tool, landing page builder app, landing page builder platform, landing page builder service",
			},
			{
				name: "description",
				content:
					"Transform your ideas into high-converting landing pages. Save time and money with our professional builder - no design or coding skills needed.",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	beforeLoad: async (ctx) => {
		try {
			const auth = await fetchClerkAuth();
			const { userId, token } = auth;

			// During SSR only (the only time serverHttpClient exists),
			// set the Clerk auth token to make HTTP queries with.
			if (token) {
				ctx.context.convexQueryClient.serverHttpClient?.setAuth(token);
			}

			return {
				userId,
				token,
			};
		} catch (error) {
			console.error("Auth error:", error);
			return {
				userId: null,
				token: null,
			};
		}
	},
	errorComponent: ({ error }) => {
		return <div>Error: {error.message}</div>;
	},
	notFoundComponent: () => <div>Not found</div>,
	component: RootComponent,
});

function RootComponent() {
	const context = useRouteContext({ from: Route.id });

	return (
		<ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
			<ConvexProviderWithClerk client={context.convexClient} useAuth={useAuth}>
				<RootDocument>
					<Outlet />
				</RootDocument>
			</ConvexProviderWithClerk>
		</ClerkProvider>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	const { theme } = useTheme();

	return (
		<html lang="en" className={theme}>
			<head>
				<HeadContent />
				<script
					id={"Cookiebot"}
					async={true}
					src={"https://consent.cookiebot.com/uc.js"}
					data-cbid={import.meta.env.VITE_COOKIEBOT_ID}
					data-blockingmode={"auto"}
					type={"text/javascript"}
				/>
			</head>
			<body>
				{children}
				<Scripts />
				<Toaster />
			</body>
		</html>
	);
}
