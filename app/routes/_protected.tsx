import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ context }) => {
    if (!context.userId) {
      throw redirect({ to: "/sign-in" });
    }
  },
  errorComponent: ({ error }) => {
    throw error;
  },
});
