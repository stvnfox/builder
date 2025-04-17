import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const APIRoute = createAPIFileRoute("/api/assistent/generate-content")({
	POST: async ({ request }) => {
		const { question } = await request.json();

		console.log(question);

		const result = streamText({
			model: openai("gpt-4o-mini"),
			messages: [
				{
					role: "assistant",
					content:
						"You are a helpful assistant that can generate good marketing content for a landing page depending on a question given by the user",
				},
				{
					role: "system",
					content:
						"The landing page this user is creating is for a product called Buildr. It is a platform that allows users to build their own landing pages.",
				},
				{
					role: "user",
					content: question,
				},
			],
		});

		console.log(result.toDataStreamResponse());

		// return result.toDataStreamResponse();

		return json({ message: "Hello '/api/assistent/generate-content'!" });
	},
});
