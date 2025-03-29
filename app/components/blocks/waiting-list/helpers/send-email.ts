export const sendEmailToSubscriber = async (email: string, name: string) => {
	const response = await fetch("/api/emails/waiting-list", {
		method: "POST",
		body: JSON.stringify({ email, name }),
	});
	const data = await response.json();

	return data;
};
