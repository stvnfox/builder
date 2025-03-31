import { type FunctionComponent, useRef } from "react";
import { useInView } from "motion/react";

type SolutionComponentProps = {
	title: string;
	description: string;
	image: {
		url: string;
		alt?: string;
	};
};

export const SolutionComponent: FunctionComponent<SolutionComponentProps> = ({
	title,
	description,
	image,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-160px" });

	return (
		<div ref={ref} className="my-20 lg:my-40">
			<div
				className="grid grid-cols-1 items-center gap-8 text-muted-foreground will-change-transform lg:grid-cols-2 lg:gap-16"
				style={{
					transform: isInView ? "none" : "translateY(20px)",
					opacity: isInView ? 1 : 0,
					transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
				}}
			>
				<img
					src={image.url}
					alt={image.alt ?? ""}
					loading="lazy"
					className="order-2 lg:order-1"
				/>
				<div className="order-1 flex flex-col gap-8 lg:order-2">
					<div className="flex flex-col gap-4">
						<h2 className="mb-6 text-balance text-left font-regular text-4xl text-foreground leading-[1.1]! tracking-tighter md:text-6xl lg:max-w-lg">
							{title}
						</h2>
						<p className="[&_a>span]:no-underline! [&_a]:underline-hover max-w-xl text-left text-lg text-muted-foreground leading-relaxed tracking-tight [&_a]:text-primary [&_a]:after:bg-primary">
							{description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
