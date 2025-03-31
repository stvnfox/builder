import { type FunctionComponent, useRef } from "react";
import { useInView } from "motion/react";
// import { Mail } from "lucide-react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
// import { ContactFormTrigger } from "@/components/contact-form/contact-form-trigger";

type FAQComponentProps = {
	title: string;
	description: string;
	faqs: { question: string; answer: string }[];
};

export const FAQComponent: FunctionComponent<FAQComponentProps> = ({
	title,
	description,
	faqs,
}) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "60px" });

	return (
		<div id="faq" className="my-20 w-full lg:my-40">
			<div className="flex flex-col gap-10">
				<div className="flex flex-col justify-center gap-4 lg:items-center lg:text-center">
					<div className="flex flex-col gap-8">
						<h2 className="max-w-xl font-regular text-4xl tracking-tighter md:text-6xl lg:text-center">
							{title}
						</h2>
						<p className="max-w-xl text-lg text-muted-foreground leading-relaxed tracking-tight">
							{description}
						</p>
					</div>
					{/* <ContactFormTrigger /> */}
				</div>

				<div className="mx-auto w-full max-w-3xl">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map(
							// biome-ignore lint/suspicious/noExplicitAny: <explanation>
							(faq: { question: string; answer: any }, index: number) => (
								<AccordionItem
									// biome-ignore lint/suspicious/noArrayIndexKey: i want to use index and combine it with id
									key={`index-${index}`}
									value={`index-${index}`}
									ref={ref}
									className="will-change-transform"
									style={{
										transform: isInView ? "none" : "translateY(20px)",
										opacity: isInView ? 1 : 0,
										transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${index * 0.25}s`,
									}}
								>
									<AccordionTrigger className="items-center text-base hover:underline-offset-4 lg:text-lg">
										{faq.question}
									</AccordionTrigger>
									<AccordionContent>
										<p className="[&_a>span]:no-underline! [&_a]:underline-hover text-base text-muted-foreground leading-relaxed tracking-tight [&_a]:text-primary [&_a]:after:bg-primary">
											{faq.answer}
										</p>
									</AccordionContent>
								</AccordionItem>
							),
						)}
					</Accordion>
				</div>
			</div>
		</div>
	);
};
