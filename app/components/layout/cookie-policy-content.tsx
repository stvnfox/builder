"use client";

import { useEffect, type FunctionComponent } from "react";

export const CookiePolicyContent: FunctionComponent = () => {
	useEffect(() => {
		const cookieBotWrapper = document.getElementById("CookiebotDeclaration");
		if (cookieBotWrapper) {
			const script = document.createElement("script");
			script.id = "CookieDeclaration";
			script.type = "text/javascript";
			script.async = true;
			script.src = `https://consent.cookiebot.com/${import.meta.env.VITE_COOKIEBOT_ID}/cd.js`;

			cookieBotWrapper.appendChild(script);
		}
	}, []);

	return <div className="mb-2 tracking-tighter" id="CookiebotDeclaration" />;
};
