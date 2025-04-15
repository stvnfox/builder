import type { FunctionComponent } from "react";

import { useViewState } from "@/providers/view-provider";

export const BuilderView: FunctionComponent = () => {
	const { selectedPageId } = useViewState();

	return <div>BuilderView for {selectedPageId}</div>;
};
