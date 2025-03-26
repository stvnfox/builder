import type { FunctionComponent } from "react";

import { useViewContext } from "@/providers/view-provider";

import { BuilderView } from "@/components/views/builder-view";
import { SeoView } from "@/components/views/seo-view";
import { SettingsView } from "@/components/views/settings-view";
import { ThemeView } from "@/components/views/theme-view";

export const DashboardWrapper: FunctionComponent = () => {
	const { view } = useViewContext();

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
