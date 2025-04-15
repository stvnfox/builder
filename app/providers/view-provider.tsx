"use client";

import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { Home } from "lucide-react";

import { useUser } from "@clerk/tanstack-start";
import { useQuery } from "@tanstack/react-query";
import { api } from "@convex/_generated/api";
import { convexQuery } from "@convex-dev/react-query";

import type { Page } from "@/types/pages";
import type { View } from "@/types/views";

const ViewStateContext = createContext<
	| {
			view: View;
			selectedPageId: string;
	  }
	| undefined
>(undefined);

const ViewActionsContext = createContext<
	| {
			setView: (view: View) => void;
			setSelectedPageId: (pageId: string) => void;
			pages: Page[];
			isLoading: boolean;
	  }
	| undefined
>(undefined);

export const ViewProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [view, setView] = useState<View>("builder");
	const [selectedPageId, setSelectedPageId] = useState<string>("");

	const { user } = useUser();
	const userId = user?.id;

	const queryArgs = useMemo(
		() => ({
			...convexQuery(api.pages.getPagesByUserId, {
				userId: userId as string,
			}),
			enabled: !!userId,
		}),
		[userId],
	);

	const { data, isPending } = useQuery(queryArgs);

	const formattedPages = useMemo(() => {
		if (!data || !data.pages) return [];

		return data.pages.map((page: { name: string; id: string }) => ({
			name: page.name,
			id: page.id,
			logo: Home,
		}));
	}, [data]);

	useEffect(() => {
		if (formattedPages.length > 0 && !selectedPageId) {
			setSelectedPageId(formattedPages[0].id);
		}
	}, [formattedPages, selectedPageId]);

	const stateValue = useMemo(
		() => ({
			view,
			selectedPageId,
		}),
		[view, selectedPageId],
	);

	const actionsValue = useMemo(
		() => ({
			setView,
			setSelectedPageId,
			pages: formattedPages,
			isLoading: isPending,
		}),
		[formattedPages, isPending],
	);

	return (
		<ViewStateContext.Provider value={stateValue}>
			<ViewActionsContext.Provider value={actionsValue}>
				{children}
			</ViewActionsContext.Provider>
		</ViewStateContext.Provider>
	);
};

export const useViewState = () => {
	const context = useContext(ViewStateContext);
	if (context === undefined) {
		throw new Error("useViewState must be used within a ViewProvider");
	}
	return context;
};

export const useViewActions = () => {
	const context = useContext(ViewActionsContext);
	if (context === undefined) {
		throw new Error("useViewActions must be used within a ViewProvider");
	}
	return context;
};
