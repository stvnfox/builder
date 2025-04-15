import type { FunctionComponent } from "react";

import { useViewState } from "@/providers/view-provider";

export const ThemeView: FunctionComponent = () => {
	const { selectedPageId } = useViewState();

	return <div>ThemeView for {selectedPageId}</div>;
};
