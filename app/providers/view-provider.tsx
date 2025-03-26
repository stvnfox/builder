"use client";

import { createContext, useContext, useState } from "react";

type View = "builder" | "settings" | "theme" | "seo" | "analytics";

type ViewContextType = {
	view: View;
	setView: (view: View) => void;
	selectedPageId: string;
	setSelectedPageId: (pageId: string) => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
	const [view, setView] = useState<View>("builder");
	const [selectedPageId, setSelectedPageId] = useState<string>("");

	return (
		<ViewContext.Provider
			value={{ view, setView, selectedPageId, setSelectedPageId }}
		>
			{children}
		</ViewContext.Provider>
	);
};

export const useViewContext = () => {
	const context = useContext(ViewContext);
	if (context === undefined) {
		throw new Error("useView must be used within a ViewProvider");
	}
	return context;
};
