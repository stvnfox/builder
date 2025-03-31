"use client";

import { useEffect, type FunctionComponent } from "react";
import { motion } from "motion/react";

import { useTheme } from "@/hooks/use-theme";

const rayVariants = {
	hidden: {
		strokeOpacity: 0,
		transition: {
			staggerChildren: 0.05,
			staggerDirection: -1,
		},
	},
	visible: {
		strokeOpacity: 1,
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const rayVariant = {
	hidden: {
		pathLength: 0,
		opacity: 0,
		scale: 0,
	},
	visible: {
		pathLength: 1,
		opacity: 1,
		scale: 1,
		strokeWidth: 1.75,
		transition: {
			duration: 0.5,
			ease: "easeOut",
			pathLength: { duration: 0.3 },
			opacity: { duration: 0.2 },
			scale: { duration: 0.3 },
		},
	},
};

export const ThemeSwitcher: FunctionComponent = () => {
	const { theme, setTheme } = useTheme();

	const sunPath =
		"M11 15C13.2091 15 15 13.2091 15 11C15 8.79086 13.2091 7 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z";
	const moonPath =
		"M11 15C13.2091 15 15 13.2091 15 11C11.3118 12.8634 9.29022 11.3273 11 7C8.79086 7 7 8.79086 7 11C7 13.2091 8.79086 15 11 15Z";

	const changeColorTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	useEffect(() => {
		if (theme === "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	return (
		<button
			className="w-fit cursor-pointer rounded-md border border-sidebar-border p-1 shadow-sm"
			type="button"
			aria-label="Click here to change the color theme"
			onClick={changeColorTheme}
		>
			<svg
				width={24}
				height={24}
				viewBox="0 0 24 24"
				strokeWidth="1"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Theme Switcher</title>
				<motion.path
					initial={{
						fillOpacity: 0,
						strokeOpacity: 0,
					}}
					animate={
						theme === "dark"
							? {
									strokeOpacity: 1,
									rotate: 0,
									stroke: "var(--foreground)",
									scale: 1.8,
									strokeWidth: 0.75,
									d: moonPath,
								}
							: {
									strokeOpacity: 1,
									rotate: 0,
									strokeWidth: 1.75,
									stroke: "var(--foreground)",
									d: sunPath,
								}
					}
					d={moonPath}
					className="translate-x-[1px] translate-y-[1px] will-change-auto"
				/>
				<motion.g
					variants={rayVariants}
					initial="hidden"
					animate={theme === "light" ? "visible" : "hidden"}
					className="translate-x-[1px] translate-y-[1px] stroke-1 stroke-foreground will-change-auto"
				>
					<motion.path variants={rayVariant} d="M11 1V3" />
					<motion.path variants={rayVariant} d="M18.07 3.93L16.66 5.34" />
					<motion.path variants={rayVariant} d="M19 11H21" />
					<motion.path variants={rayVariant} d="M16.66 16.66L18.07 18.07" />
					<motion.path variants={rayVariant} d="M11 19V21" />
					<motion.path variants={rayVariant} d="M5.34 16.66L3.93 18.07" />
					<motion.path variants={rayVariant} d="M1 11H3" />
					<motion.path variants={rayVariant} d="M3.93 3.93L5.34 5.34" />
				</motion.g>
			</svg>
		</button>
	);
};
