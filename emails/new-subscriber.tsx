import {
	Html,
	Heading,
	Tailwind,
	Text,
	Body,
	Container,
	Head,
	Preview,
	Section,
} from "@react-email/components";
import { HandMetal } from "lucide-react";

const background = "oklch(0.98 0.02 240)";
const headingColor = "oklch(0.15 0.02 240)";
const textColor = "oklch(.45 .1 240)";
const borderColor = "oklch(0.15 0.02 240)";

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
							New waiting list sign-up 🎉
						</Heading>
						<Text className={`font-light text-[${textColor}]`}>
							Hello team,
						</Text>
						<Text className={`font-light text-[${textColor}]`}>
							We just received a new sign-up for our waiting list!
						</Text>
						<Text className={`font-light text-[${textColor}]`}>
							Details of the sign-up:
						</Text>
						<Text className={`font-semibold text-[${textColor}]`}>
							Name: <br />
							{name},<br />
							Email: <br />
							{email}
						</Text>
						<Text className={`font-light text-[${textColor}]`}>
							This is a great sign of growing interest in our platform. Let’s
							continue building momentum as we work toward our launch!
						</Text>
						<Text className={`font-light text-[${textColor}]`}>
							Thank you for all your hard work and dedication.
						</Text>
						<Text className={`font-light text-[${textColor}]`}>
							Best,
							<br />
							The Buildr team
						</Text>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};
