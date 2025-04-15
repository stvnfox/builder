import type { FunctionComponent } from "react";

import { useViewState } from "@/providers/view-provider";

export const SettingsView: FunctionComponent = () => {
	const { selectedPageId } = useViewState();

	return <div>SettingsView for {selectedPageId}</div>;
};
