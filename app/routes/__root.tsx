import type { ReactNode } from "react";

import { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouteContext } from "@tanstack/react-router";
import { Outlet, HeadContent, Scripts } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { ClerkProvider, useAuth } from "@clerk/tanstack-start";
import { getAuth } from "@clerk/tanstack-start/server";
import { getWebRequest } from "@tanstack/react-start/server";
import { ConvexQueryClient } from "@convex-dev/react-query";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";

// Extract environment variable to avoid hydration issues
const CLERK_PUBLISHABLE_KEY = (import.meta as any).env.VITE_CLERK_PUBLISHABLE_KEY;

const fetchClerkAuth = createServerFn({ method: "GET" }).handler(async () => {
  try {
    const auth = await getAuth(getWebRequest()!);
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
        title: "builder - the easiest way to build your landing page",
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
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)
    }

      return {
        userId,
        token,
      };
    } catch (error) {
      console.error('Auth error:', error);
      return {
        userId: null,
        token: null,
      };
    }
  },
  errorComponent: ({ error }) => {
    return <div>Error: {error.message}</div>
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
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
