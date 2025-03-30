import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_policies/privacy-policy")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section>
			<h1 className="mb-4 font-regular text-4xl tracking-tighter md:text-6xl">
				Privacy Policy - Buildr
			</h1>
			<h2 className="mb-2 font-medium text-xl tracking-tighter md:text-2xl">
				Effective Date: 30th March 2025
			</h2>
			<p className="mb-4 text-muted-foreground tracking-tighter">
				Welcome to Buildr ("we," "our," or "us"). We value your privacy and are
				committed to protecting your personal data. This Privacy Policy explains
				how we collect, use, and protect your information when you use our
				website (www.build-r.dev) and related services. It also outlines your
				rights under the General Data Protection Regulation (GDPR).
			</p>
			<h3 className="mb-3 font-medium text-lg tracking-tighter md:text-xl">
				1. Information We Collect
			</h3>
			<h4 className="font-medium tracking-tighter">1.1 Personal Data</h4>
			<div className="mb-1 text-muted-foreground tracking-tighter">
				We may collect the following personal data when you use our services:
				<ul className="mt-1 mb-4 flex list-inside list-disc flex-col gap-1 font-regular text-base text-muted-foreground tracking-tighter">
					<li>
						Identity Information:
						<br /> Name, email address, and any other information you provide
						when creating an account or contacting us.
					</li>
					<li>
						Technical Data:
						<br /> IP address, browser type, device information, and usage data.
					</li>
				</ul>
			</div>
			<h4 className="font-medium tracking-tighter">1.2 Non-Personal Data</h4>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We also collect anonymized and aggregated data to help us improve our
				services.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				2. How We Use Your Data
			</h3>
			<p className="mb-2 text-muted-foreground tracking-tighter">
				We use your data for the following purposes:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-base text-muted-foreground tracking-tighter">
				<li>To provide and improve our services.</li>
				<li>To respond to your inquiries and support requests.</li>
				<li>To send you service-related notifications and updates.</li>
				<li>To analyze website usage and improve user experience.</li>
				<li>To comply with legal obligations.</li>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				3. Legal Basis for Processing
			</h3>
			<p className="mb-1 text-muted-foreground tracking-tighter">
				Under GDPR, we process your personal data based on the following legal
				grounds:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>
					Consent:
					<br /> When you give explicit consent for specific purposes.
				</li>
				<li>
					Contract:
					<br /> To perform a contract with you or take steps at your request
					before entering into a contract.
				</li>
				<li>
					Legal Obligation:
					<br /> To comply with legal requirements.
				</li>
				<li>
					Legitimate Interests:
					<br /> For purposes such as improving our services and ensuring
					security, provided that your rights do not override these interests.
				</li>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				4. Data Sharing
			</h3>
			<p className="mb-1 text-muted-foreground tracking-tighter">
				We do not sell your personal data. However, we may share your data with:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>
					Service Providers:
					<br /> Third-party vendors who help us operate our platform.
				</li>
				<li>
					Legal Authorities:
					<br /> When required to comply with the law.
				</li>
				<li>
					Business Transfers:
					<br /> In the event of a merger, acquisition, or sale of assets.
				</li>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				5. Data Retention
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We retain your personal data only as long as necessary to fulfill the
				purposes outlined in this policy. When data is no longer needed, we
				securely delete or anonymize it.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				6. Your Rights Under GDPR
			</h3>
			<p className="mb-1 text-muted-foreground tracking-tighter">
				As a resident of the European Economic Area (EEA), you have the
				following rights:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>
					Access:
					<br /> Request access to your personal data.
				</li>
				<li>
					Correction:
					<br /> Request correction of inaccurate or incomplete data.
				</li>
				<li>
					Deletion:
					<br /> Request deletion of your data.
				</li>
				<li>
					Restriction:
					<br /> Request restriction of data processing.
				</li>
				<li>
					Portability:
					<br /> Receive a copy of your data in a machine-readable format.
				</li>
				<li>
					Objection:
					<br /> Object to data processing based on legitimate interests or
					direct marketing.
				</li>
				<li>
					Withdraw Consent:
					<br /> Withdraw your consent at any time.
				</li>
				<p>
					To exercise your rights,{" "}
					<a
						href="mailto:info@stvnx.nl"
						className="underline-hover text-primary after:bg-primary dark:text-foreground dark:after:bg-foreground"
					>
						please contact us.
					</a>
				</p>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				7. Data Security
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We implement robust security measures to protect your data from
				unauthorized access, loss, or misuse. However, no system can guarantee
				absolute security.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				8. Third-Party Links
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Our website may contain links to third-party websites. We are not
				responsible for their privacy practices, and we encourage you to review
				their policies.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				9. Cookies
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We use cookies to enhance your browsing experience. For detailed
				information, please see our{" "}
				<Link
					to="/cookie-policy"
					className="underline-hover text-primary after:bg-primary dark:text-foreground dark:after:bg-foreground"
				>
					Cookie Policy
				</Link>
				.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				10. Updates to This Privacy Policy
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We may update this policy from time to time. Significant changes will be
				communicated to you via email or a notice on our website.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				11. Contact Us
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				If you have any questions or concerns about this Privacy Policy,{" "}
				<a
					href="mailto:info@stvnx.nl"
					className="underline-hover text-primary after:bg-primary dark:text-foreground dark:after:bg-foreground"
				>
					please contact us.
				</a>
			</p>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Thank you for trusting Buildr with your data.
			</p>
		</section>
	);
}
