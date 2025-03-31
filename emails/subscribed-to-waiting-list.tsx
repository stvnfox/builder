import {
	Html,
	Heading,
	Tailwind,
	Text,
	Body,
	Container,
	Head,
	Preview,
	Hr,
	Link,
	Section,
	Column,
	Row,
} from "@react-email/components";
import {
	Hammer,
	HandMetal,
	PanelsTopLeft,
	Sparkles,
	TabletSmartphone,
} from "lucide-react";

const background = "#EDFBFF";
const headingColor = "#040C13";
const textColor = "#085B87";
const linkColor = "#040C13";
const borderColor = "#040C13";

export const SubscribedToWaitingListEmail = ({
	name,
}: {
	name: string;
}) => {
	return (
		<Html lang="en">
			<Head>
				<title>Welcome to Buildr 🎉</title>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<Tailwind
			// Commented out config bc. tailwind 4.0.0 is not working with it
			// config={{
			//   theme: { extend: { fontFamily: { sans: ["Geist", "sans-serif"] } } },
			// }}
			>
				<Preview>Welcome to Buildr 🎉</Preview>
				<Body className={`bg-[${background}] font-sans text-[${textColor}]`}>
					<Container
						className={`mx-auto my-[40px] max-w-[465px] rounded-md border border-[${borderColor}] border-solid p-[20px]`}
					>
						<Section className="my-[32px]">
							<HandMetal className="mx-auto" />
						</Section>
						<Heading
							as="h1"
							className={`font-medium text-xl leading-[1.1] tracking-tighter text-[${headingColor}]`}
						>
							Welcome to Buildr 🎉
						</Heading>
						<Text
							className={`leading-relaxed tracking-tight text-[${textColor}]`}
						>
							Hi {name},
						</Text>
						<Text
							className={`leading-relaxed tracking-tight text-[${textColor}]`}
						>
							We’re excited to have you on the waiting list for Builder! You’ll
							be among the first to experience a simple, fast, and effective way
							to create beautiful landing pages—no coding required.
						</Text>
						<Text
							className={`leading-relaxed tracking-tight text-[${textColor}]`}
						>
							We’re working hard to get everything ready, and we’ll let you know
							as soon as you can access Builder. In the meantime, here’s what
							you can expect:
						</Text>
						<Row className="mt-[16px]">
							<Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
								<Hammer
									className={`mx-auto text-[${textColor}]`}
									color={textColor}
									size={24}
								/>
								<Text
									className={`m-0 mt-[4px] mb-[0px] font-semibold text-[18px] text-[${headingColor}]`}
								>
									Drag-and-Drop Simplicity
								</Text>
								<Text className={`mt-[2px] mb-[0px] text-[${textColor}]`}>
									Easily build your landing page with an intuitive, no-code
									editor.
								</Text>
							</Column>
						</Row>
						<Row className="mt-[16px]">
							<Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
								<PanelsTopLeft
									className={`mx-auto text-[${textColor}]`}
									color={textColor}
									size={24}
								/>
								<Text
									className={`m-0 mt-[4px] mb-[0px] font-semibold text-[18px] text-[${headingColor}]`}
								>
									Professionally Designed Templates
								</Text>
								<Text className={`mt-[2px] mb-[0px] text-[${textColor}]`}>
									Choose from stunning, high-converting templates to get started
									quickly.
								</Text>
							</Column>
						</Row>
						<Row className="mt-[16px]">
							<Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
								<Sparkles
									className={`mx-auto text-[${textColor}]`}
									color={textColor}
									size={24}
								/>
								<Text
									className={`m-0 mt-[4px] mb-[0px] font-semibold text-[18px] text-[${headingColor}]`}
								>
									AI Content Helper
								</Text>
								<Text className={`mt-[2px] mb-[0px] text-[${textColor}]`}>
									Struggling with copy? Our AI assistant will generate engaging
									text for your landing page.
								</Text>
							</Column>
						</Row>
						<Row className="mt-[16px]">
							<Column className="w-1/2 pr-[12px] align-baseline" colSpan={1}>
								<TabletSmartphone
									className={`mx-auto text-[${textColor}]`}
									color={textColor}
									size={24}
								/>
								<Text
									className={`m-0 mt-[4px] mb-[0px] font-semibold text-[18px] text-[${headingColor}]`}
								>
									Mobile-Optimized Pages
								</Text>
								<Text className={`mt-[2px] mb-[0px] text-[${textColor}]`}>
									Your landing page will look great on any device—automatically.
								</Text>
							</Column>
						</Row>
						<Text
							className={`leading-relaxed tracking-tight text-[${textColor}]`}
						>
							Stay tuned for updates! We’ll keep you posted on our progress and
							let you know the moment Buildr is live.
						</Text>
						<Text
							className={`leading-relaxed tracking-tight text-[${textColor}]`}
						>
							Thank you again for your support and enthusiasm. We can’t wait to
							share what we’ve been working on with you!
						</Text>
						<Text
							className={`leading-relaxed tracking-tight text-[${textColor}]`}
						>
							Talk soon,
							<br />
							The Buildr team
						</Text>
						<Hr className={`my-[20px] rounded-md bg-[${borderColor}]`} />
						<Text
							className={`text-[${textColor}] text-sm leading-relaxed tracking-tight`}
						>
							If you have any questions or suggestions, please don't hesitate{" "}
							<Link
								href="mailto:hello@build-r.dev"
								className={`text-[${linkColor}]`}
							>
								to reach out to us
							</Link>
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
