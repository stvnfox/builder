import type { FunctionComponent } from "react";

import { useViewContext } from "@/providers/view-provider";

export const SettingsView: FunctionComponent = () => {
	const { selectedPageId } = useViewContext();

	return <div>SettingsView for {selectedPageId}</div>;
};
