import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/preview/$id")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/preview/$id"!</div>;
}
