"use client";

import { createContext, useContext, useState } from "react";
import { Home } from "lucide-react";

import type { Page } from "@/types/pages";
import type { View } from "@/types/views";

type ViewContextType = {
	view: View;
	setView: (view: View) => void;
	selectedPageId: string;
	setSelectedPageId: (pageId: string) => void;
	pages: Page[];
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export const ViewProvider = ({ children }: { children: React.ReactNode }) => {
	const [view, setView] = useState<View>("builder");
	const [selectedPageId, setSelectedPageId] = useState<string>("landing-page");

	// TODO: Get pages from database and set selectedPageId to first item here
	const pages = [
		{
			name: "Landing page",
			id: "landing-page",
			logo: Home,
		},
		{
			name: "Landing page 2",
			id: "landing-page-2",
			logo: Home,
		},
	];

	return (
		<ViewContext.Provider
			value={{ view, setView, selectedPageId, setSelectedPageId, pages }}
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
