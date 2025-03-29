import * as React from "react";
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
	Img,
} from "@react-email/components";
import { HandMetal } from "lucide-react";

export const SubscribedToWaitingListEmail = ({
	name,
}: {
	name: string;
}) => {
	return (
		<Html lang="en">
			<Head>
				<title>Welcome to builder 🎉</title>
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
				<Preview>Welcome to builder 🎉</Preview>
				<Body className="bg-[hsl(215,32%,13%)] font-sans text-[hsl(210,40%,98%)]">
					<Container className="mx-auto my-[40px] max-w-[465px] rounded-md border border-[hsl(217,15%,65%)] border-solid p-[20px]">
						<Section className="my-[32px]">
							<HandMetal className="mx-auto" />
						</Section>
						<Heading
							as="h1"
							className="font-medium text-xl leading-[1.1] tracking-tighter"
						>
							Welcome to builder 🎉
						</Heading>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							Dear {name},
						</Text>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							Thank you for signing up for our waiting list! We’re thrilled to
							have you join us on this exciting journey as we build our
							platform.
						</Text>
						<Text className="text-[hsl(217,15%,65%)] leading-relaxed tracking-tight">
							While we’re hard at work creating an exceptional experience for
							you, we’d love for you to be part of our growing community. Join
							our{" "}
							<Link
								href="https://discord.gg/etjCdzpVrS"
								className="text-[hsl(24,95%,53%)]"
							>
								Discord community
							</Link>{" "}
							to connect with like-minded people, find roleplay partners, and
							discuss all things related to improving your Medical English
							skills.
						</Text>
						<Text className="text-[hsl(217,15%,65%)] leading-relaxed tracking-tight">
							For real-time updates and behind-the-scenes looks at our progress,
							don’t forget to follow us on{" "}
							<Link
								href="https://www.instagram.com/medixchat/"
								className="text-[hsl(24,95%,53%)]"
							>
								Instagram
							</Link>
							. We share our milestones, features in the making, and everything
							leading up to the big launch.
						</Text>
						<Text className="text-[hsl(217,15%,65%)] leading-relaxed tracking-tight">
							Thank you again for your support and enthusiasm. We can’t wait to
							share what we’ve been working on with you!
						</Text>
						<Text className="text-[hsl(217,15%,65%)] leading-relaxed tracking-tight">
							Best regards,
							<br />
							The builder team
						</Text>
						<Hr className="my-[20px] rounded-md bg-[hsl(217,15%,65%)] text-[hsl(217,15%,65%)]" />
						<Text className="text-[hsl(217,15%,65%)] text-sm leading-relaxed tracking-tight">
							If you have any questions, please don't hesitate{" "}
							<Link
								href="mailto:info@stvnx.nl"
								className="text-[hsl(24,95%,53%)]"
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
