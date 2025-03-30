"use client";

import type { FunctionComponent } from "react";

import { useRef } from "react";
import { useInView } from "motion/react";
import { XIcon } from "lucide-react";

type ProblemsComponentProps = {
	title: string;
	description: string;
	problems: string[];
};

export const ProblemsComponent: FunctionComponent<ProblemsComponentProps> = ({
	title,
	description,
	problems,
}) => {
	return (
		<div className="my-20 lg:my-32">
			<div className="flex flex-col items-center gap-4">
				<h2 className="text-balance text-center font-regular text-4xl leading-[1.1]! tracking-tighter md:text-6xl lg:max-w-xl">
					{title}
				</h2>
				<p className="mb-4 max-w-xl text-center text-muted-foreground text-xl leading-relaxed tracking-tight lg:max-w-2xl">
					{description}
				</p>
				<ul className="flex flex-col gap-8 lg:items-center">
					{problems.map((problem: string, index: number) => (
						<ProblemItem
							key={`problem-${
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								index
							}`}
							problem={problem}
							index={index}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

const ProblemItem: FunctionComponent<{ problem: string; index: number }> = ({
	problem,
	index,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<li
			ref={ref}
			style={{
				transform: isInView ? "none" : "translateY(20px)",
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.25}s`,
			}}
			className="flex gap-4 text-balance text-lg text-muted-foreground lg:max-w-2xl lg:items-center lg:justify-center lg:gap-4 lg:text-pretty lg:text-xl"
		>
			<XIcon className="min-h-8 min-w-8 stroke-primary lg:min-h-10 lg:min-w-10 dark:stroke-foreground" />
			{problem}
		</li>
	);
};
