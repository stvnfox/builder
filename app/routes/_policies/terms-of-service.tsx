import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_policies/terms-of-service")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section>
			<h1 className="mb-4 font-regular text-4xl tracking-tighter md:text-6xl">
				Terms of Service - Builder
			</h1>
			<p className="mb-4 text-muted-foreground tracking-tighter">
				Welcome to Builder ("we," "our," or "us"). By accessing or using our
				website (www.build-r.dev) and related services, you agree to be bound by
				these Terms of Service ("Terms"). If you do not agree to these Terms,
				you must not use our services.
			</p>
			<h3 className="mb-3 font-medium text-lg tracking-tighter md:text-xl">
				1. Overview
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Builder provides a platform for easy and fast landing page creation.
				These Terms govern your use of our platform, including any updates or
				changes made over time.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				2. Eligibility
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				By using our services, you confirm that:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>
					You are at least 18 years old or have the legal capacity to agree to
					these Terms.
				</li>
				<li>
					You will comply with these Terms and all applicable laws and
					regulations.
				</li>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				3. Account Registration
			</h3>
			<p className="mb-2 text-muted-foreground tracking-tighter">
				To access certain features, you may need to create an account. By
				registering an account, you agree to:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>Provide accurate and up-to-date information.</li>
				<li>Keep your account credentials secure.</li>
				<li>Notify us immediately of unauthorized access to your account.</li>
			</ul>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We reserve the right to suspend or terminate your account for violations
				of these Terms.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				4. Acceptable Use
			</h3>
			<p className="mb-1 text-muted-foreground tracking-tighter">
				You agree to use Builder responsibly and refrain from:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>Using the platform for illegal or harmful activities.</li>
				<li>Impersonating another individual or entity.</li>
				<li>Interfering with the operation of our services.</li>
				<li>Uploading viruses, malware, or harmful content.</li>
			</ul>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We reserve the right to monitor and moderate user activity to ensure
				compliance.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				5. Intellectual Property
			</h3>
			<p className="mb-1 text-muted-foreground tracking-tighter">
				All content, trademarks, and intellectual property on Builder are owned
				by us or our licensors. You are granted a limited, non-exclusive license
				to use our services for personal or business purposes. Unauthorized use,
				copying, or distribution of our intellectual property is prohibited.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				6. Privacy
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Our use of your personal data is governed by our{" "}
				<Link
					to="/privacy-policy"
					className="underline-hover text-primary after:bg-primary dark:text-foreground dark:after:bg-foreground"
				>
					Privacy Policy
				</Link>
				. By using our services, you consent to our data practices.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				7. Third-Party Services
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Builder may include links or integrations with third-party services. We
				are not responsible for their content, terms, or privacy practices. You
				use third-party services at your own risk.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				8. Disclaimers
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Our services are provided "as is" without warranties of any kind,
				including fitness for a particular purpose or non-infringement. We do
				not guarantee uninterrupted or error-free operation of our services.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				9. Limitation of Liability
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				To the fullest extent permitted by law, Builder and its affiliates are
				not liable for:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>
					Direct, indirect, incidental, or consequential damages arising from
					your use of our services.
				</li>
				<li>Loss of data or unauthorized access to your account.</li>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				10. Indemnification
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				You agree to indemnify and hold harmless Builder from any claims,
				damages, or liabilities arising from:
			</p>
			<ul className="mt-1 mb-6 flex list-inside list-disc flex-col gap-1 font-regular text-muted-foreground tracking-tighter">
				<li>Your use of our services.</li>
				<li>Your breach of these Terms.</li>
				<li>Your violation of any law or third-party rights.</li>
			</ul>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				11. Changes to These Terms
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We may update these Terms from time to time. Significant changes will be
				communicated to you via email or a notice on our website.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				12. Governing Law
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				These Terms are governed by the laws of Spain. Any disputes arising from
				these Terms will be resolved in the courts of Spain.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				13. Termination
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				We reserve the right to suspend or terminate your access to Builder for
				violations of these Terms or other reasons at our discretion.
				Termination does not waive any of our rights under these Terms.
			</p>
			<h3 className="mb-2 font-medium text-lg tracking-tighter md:text-xl">
				14. Contact Us
			</h3>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				If you have any questions about these Terms,{" "}
				<a
					href="mailto:info@stvnx.nl"
					className="underline-hover text-primary after:bg-primary dark:text-foreground dark:after:bg-foreground"
				>
					please contact us.
				</a>
			</p>
			<p className="mb-6 text-muted-foreground tracking-tighter">
				Thank you for choosing Builder.
			</p>
		</section>
	);
}
