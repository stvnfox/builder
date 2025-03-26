import type { FunctionComponent } from "react";

import { useViewContext } from "@/providers/view-provider";

export const BuilderView: FunctionComponent = () => {
	const { selectedPageId } = useViewContext();

	return <div>BuilderView for {selectedPageId}</div>;
};
