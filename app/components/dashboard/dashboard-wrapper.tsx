import type { FunctionComponent } from "react";

import { useViewState } from "@/providers/view-provider";

import { BuilderView } from "@/components/views/builder-view";
import { SeoView } from "@/components/views/seo-view";
import { SettingsView } from "@/components/views/settings-view";
import { ThemeView } from "@/components/views/theme-view";

export const DashboardWrapper: FunctionComponent = () => {
	const { view } = useViewState();

	switch (view) {
		case "builder":
			return <BuilderView />;
		case "settings":
			return <SettingsView />;
		case "theme":
			return <ThemeView />;
		case "seo":
			return <SeoView />;
	}
};
