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
	Section,
	Img,
} from "@react-email/components";
import { HandMetal } from "lucide-react";

export const NewSubscriberEmail = ({
	email,
	name,
}: {
	email: string;
	name: string;
}) => {
	return (
		<Html lang="en">
			<Head>
				<title>New subscriber to waiting list 🎉</title>
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
				<Preview>New waiting list sign-up 🎉</Preview>
				<Body className="bg-[hsl(215,32%,13%)] font-sans text-[hsl(210,40%,98%)]">
					<Container className="mx-auto my-[40px] max-w-[465px] rounded-md border border-[hsl(217,15%,65%)] border-solid p-[20px]">
						<Section className="my-[32px]">
							<HandMetal className="mx-auto" />
						</Section>
						<Heading
							as="h1"
							className="font-medium text-xl leading-[1.1] tracking-tighter"
						>
							New waiting list sign-up 🎉
						</Heading>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							Hello team,
						</Text>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							We just received a new sign-up for our waiting list!
						</Text>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							Details of the sign-up:
						</Text>
						<Text className="font-semibold text-[hsl(217,15%,65%)]">
							Name: <br />
							{name},<br />
							Email: <br />
							{email}
						</Text>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							This is a great sign of growing interest in our platform. Let’s
							continue building momentum as we work toward our launch!
						</Text>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							Thank you for all your hard work and dedication.
						</Text>
						<Text className="font-light text-[hsl(217,15%,65%)]">
							Best,
							<br />
							The builder team
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
