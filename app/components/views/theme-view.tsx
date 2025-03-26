import type { FunctionComponent } from "react";

import { useViewContext } from "@/providers/view-provider";

export const ThemeView: FunctionComponent = () => {
	const { selectedPageId } = useViewContext();

	return <div>ThemeView for {selectedPageId}</div>;
};
