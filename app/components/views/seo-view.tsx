import type { FunctionComponent } from "react";

import { useViewContext } from "@/providers/view-provider";

export const SeoView: FunctionComponent = () => {
	const { selectedPageId } = useViewContext();

	return <div>SeoView for {selectedPageId}</div>;
};
