import type { FunctionComponent } from "react";

import { useViewState } from "@/providers/view-provider";

export const SeoView: FunctionComponent = () => {
	const { selectedPageId } = useViewState();

	return <div>SeoView for {selectedPageId}</div>;
};
