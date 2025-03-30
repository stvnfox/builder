"use client";

import { useState, type FunctionComponent } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { usePostHog } from "posthog-js/react";
import { Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { useConvexMutation } from "@convex-dev/react-query";
import { api } from "@convex/_generated/api";

import { sendEmailToSubscriber } from "./helpers/send-email";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

const formSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.string().min(1, { message: "Email is required" }).email(),
	consent: z.boolean().refine((value) => value, {
		message: "You must give consent to join the waiting list",
	}),
});

type WaitingListFormProps = {
	onSuccess: () => void;
};

export const WaitingListForm: FunctionComponent<WaitingListFormProps> = ({
	onSuccess,
}) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			consent: false,
		},
	});

	const addToWaitingList = useMutation({
		mutationFn: useConvexMutation(api.waiting_list.addToWaitingList),
	});

	const handleSuccess = ({ name }: { name: string }) => {
		toast.success(`Yeah, you're on the list ${name}! 🚀`, {
			description: `Thanks for signing up! We'll be in touch soon.`,
		});

		// ph.capture("submitted the waiting list form");
		// ph.capture(`submitted the waiting list form as ${form.getValues("type")}`);

		sendEmailToSubscriber(form.getValues("email"), form.getValues("name"));

		// Close the dialog through the parent component
		onSuccess();
	};

	const [isLoading, setIsLoading] = useState(false);
	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		setIsLoading(true);

		const response = await addToWaitingList.mutateAsync({
			name: values.name,
			email: values.email,
		});

		if (response.status === 200) {
			handleSuccess({ name: values.name });
		} else {
			if (response.status === 409) {
				// ph.capture("submitted the waiting list form with an existing email");
				toast.error(`Thanks for your enthousiasm, ${values.name}!`, {
					description:
						"But your email already exists on the waiting list so we didn't add you again. We'll be in touch soon.",
				});
			} else {
				// ph.capture("failed to submit the waiting list form");

				toast.error(`Something went wrong, ${values.name}!`, {
					description: "Failed to add email to waiting list. Please try again.",
				});
			}
		}

		setIsLoading(false);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="example@example.com"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="consent"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-1 space-y-0">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<FormLabel className="inline font-normal leading-4">
								I agree to receive emails from{" "}
								<strong className="inline">Buildr</strong> about new features,
								updates, and other news. View our{" "}
								<Link
									to="/privacy-policy"
									target="_blank"
									rel="noopener noreferrer"
									className="inline font-bold text-primary hover:underline hover:underline-offset-2"
								>
									Privacy Policy
								</Link>{" "}
								to learn how we protect and manage your data.
							</FormLabel>
						</FormItem>
					)}
				/>
				<Button type="submit" disabled={isLoading}>
					{isLoading ? <Spinner /> : "Submit"}
				</Button>
			</form>
		</Form>
	);
};
