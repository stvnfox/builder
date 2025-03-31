import { type FunctionComponent, useRef } from "react";
import { Check } from "lucide-react";
import { useInView } from "motion/react";

type BenefitsComponentProps = {
	title: string;
	description: string;
	items: { title: string; description: string }[];
};

export const BenefitsComponent: FunctionComponent<BenefitsComponentProps> = ({
	title,
	description,
	items,
}) => {
	return (
		<div className="my-20 w-full lg:my-40">
			<div className="flex flex-col items-start gap-4">
				<div className="flex flex-col gap-2">
					<h2 className="font-regular text-4xl tracking-tighter md:text-6xl lg:max-w-xl">
						{title}
					</h2>
					<p className="[&_a>span]:no-underline! [&_a]:underline-hover max-w-xl text-left text-muted-foreground text-xl leading-relaxed tracking-tight [&_a]:text-primary [&_a]:after:bg-primary">
						{description}
					</p>
				</div>
				<div className="flex w-full flex-col gap-10 pt-12">
					<div className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-3">
						{items.map(
							(
								// biome-ignore lint/suspicious/noExplicitAny: data is different for each component so not typed
								benefit: { title: string; description: any },
								index: number,
							) => (
								<BenefitItem
									// biome-ignore lint/suspicious/noArrayIndexKey: index is needed for key
									key={`benefit-${index}`}
									title={benefit.title}
									description={benefit.description}
									index={index}
								/>
							),
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const BenefitItem: FunctionComponent<{
	title: string;
	// biome-ignore lint/suspicious/noExplicitAny: data is different for each component so not typed
	description: any;
	index: number;
}> = ({ title, description, index }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<div
			ref={ref}
			className="flex w-full flex-row items-start gap-6 will-change-transform"
			style={{
				transform: isInView ? "none" : "translateY(20px)",
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.35}s`,
			}}
		>
			<Check className="min-h-6 min-w-6 text-primary dark:text-foreground" />
			<div className="flex flex-col gap-1">
				<h3 className="font-medium text-lg">{title}</h3>
				<p className="[&_a>span]:no-underline! [&_a]:underline-hover text-muted-foreground [&_a]:text-primary [&_a]:after:bg-primary">
					{description}
				</p>
			</div>
		</div>
	);
};
