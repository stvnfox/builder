import { json } from "@tanstack/react-start";
import { createAPIFileRoute } from "@tanstack/react-start/api";
import { Resend } from "resend";

import { NewSubscriberEmail } from "emails/new-subscriber";
import { SubscribedToWaitingListEmail } from "emails/subscribed-to-waiting-list";

const resend = new Resend(process.env.RESEND_API_KEY);

export const APIRoute = createAPIFileRoute("/api/emails/waiting-list")({
	POST: async ({ request }) => {
		const { email, name } = await request.json();

		try {
			const { data, error } = await resend.emails.send({
				from: "builder <hello@build-r.dev>",
				to: [email],
				subject: "Welcome to builder 🎉",
				react: SubscribedToWaitingListEmail({ name }),
			});

			if (error) {
				return json({ error }, { status: 500 });
			}
			// TODO: Send email to us to inform about new subscriber
			const { error: notificationError } = await resend.emails.send({
				from: "builder <hello@build-r.dev>",
				to: ["steven@stvnx.nl"],
				subject: "New waiting list subscriber 🎉",
				react: NewSubscriberEmail({ email, name }),
			});

			if (notificationError) {
				return json({ error: notificationError }, { status: 500 });
			}

			return json(data);
		} catch (error) {
			return json({ error }, { status: 500 });
		}
	},
});
