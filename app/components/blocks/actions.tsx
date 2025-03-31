import { type FunctionComponent, useRef } from "react";
import { useInView } from "motion/react";

type ActionsComponentProps = {
	title: string;
	subtitle: string;
	image: {
		url: string;
		alt?: string;
	};
	actions: {
		title: string;
		description: string;
	}[];
};

export const ActionsComponent: FunctionComponent<ActionsComponentProps> = ({
	title,
	subtitle,
	image,
	actions,
}) => {
	return (
		<div className="my-20 lg:my-40">
			<h2 className="mb-12 text-balance text-center font-regular text-4xl leading-[1.1]! tracking-tighter md:text-6xl">
				{title}
			</h2>
			<div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-4">
						<h3 className="mb-6 text-balance text-left font-medium text-2xl leading-[1.1]! tracking-tighter md:text-4xl lg:max-w-lg">
							{subtitle}
						</h3>
						<div className="flex flex-col gap-8">
							{/* biome-ignore lint/suspicious/noExplicitAny: not typed */}
							{actions.map((action: any, index: number) => (
								<ActionItem
									key={`action-${
										// biome-ignore lint/suspicious/noArrayIndexKey: i want to use index and combine it with action
										index
									}`}
									index={index}
									{...action}
								/>
							))}
						</div>
					</div>
				</div>
				<img
					src={image.url}
					alt={image.alt ?? ""}
					className="h-full w-full object-contain"
				/>
			</div>
		</div>
	);
};

const ActionItem: FunctionComponent<{
	title: string;
	// biome-ignore lint/suspicious/noExplicitAny: not typed
	description: any;
	index: number;
}> = ({ title, description, index }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			ref={ref}
			className="flex items-start gap-4"
			style={{
				transform: isInView ? "none" : "translateY(20px)",
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.5}s`,
			}}
		>
			<span className="-mt-1 min-w-8 font-bold text-5xl text-muted-foreground leading-none">
				{index + 1}
			</span>
			<div>
				<h4 className="mb-2 text-balance font-medium text-lg leading-[1.1]! tracking-tighter">
					{title}
				</h4>
				<p className="[&_a>span]:no-underline! [&_a]:underline-hover max-w-md text-left text-muted-foreground [&_a]:text-primary [&_a]:after:bg-primary">
					{description}
				</p>
			</div>
		</div>
	);
};
