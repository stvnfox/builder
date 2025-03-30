import { useState, useCallback } from "react";
import { useLocation } from "@tanstack/react-router";
type Theme = "dark" | "light";

const DEFAULT_THEME: Theme = "light";
const LANDING_PAGE_ROUTES = [
	"/",
	"/privacy-policy",
	"/cookie-policy",
	"/terms-of-service",
];

const getThemeFromDOM = (): Theme => {
	if (typeof document === "undefined") return DEFAULT_THEME;

	return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export const useTheme = () => {
	const [theme, setThemeState] = useState<Theme>(getThemeFromDOM());

	const location = useLocation();
	const isLandingPage = LANDING_PAGE_ROUTES.includes(location.pathname);

	const setTheme = useCallback(
		(newTheme: Theme) => {
			if (typeof document === "undefined") return;

			// Update DOM
			document.documentElement.classList.remove("dark", "light");
			document.documentElement.classList.add(newTheme);

			if (newTheme !== theme) {
				setThemeState(newTheme);
			}

			if (typeof window !== "undefined") {
				try {
					localStorage.setItem("theme", newTheme);
				} catch (error) {
					console.error(error);
				}
			}
		},
		[theme],
	);

	// Only run initialization logic on client-side
	if (typeof window !== "undefined") {
		// Check if we need to initialize from preferences
		try {
			const savedTheme = localStorage.getItem("theme") as Theme | null;
			const prefersDark = window.matchMedia(
				"(prefers-color-scheme: dark)",
			).matches;

			if (savedTheme === "dark" || savedTheme === "light") {
				// Ensure DOM matches saved preference
				if (savedTheme !== theme) {
					setTheme(savedTheme);
				}
			} else if (prefersDark && theme === "light") {
				// Ensure DOM matches system preference if no saved preference
				setTheme("dark");
			}

			if (isLandingPage) {
				setTheme("light");
			}
		} catch (error) {
			console.warn("Failed to initialize theme", error);
		}
	}

	return { theme, setTheme };
};
