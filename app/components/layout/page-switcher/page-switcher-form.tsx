import type { FunctionComponent } from "react";

import { useForm, useStore } from "@tanstack/react-form";
import { z } from "zod";
import { toast } from "sonner";
import { useUser } from "@clerk/tanstack-start";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@convex/_generated/api";
import { useConvexMutation } from "@convex-dev/react-query";

import { useViewActions } from "@/providers/view-provider";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";

export const PageSwitcherForm: FunctionComponent = () => {
	const userId = useUser().user?.id;
	const { setSelectedPageId } = useViewActions();

	const queryClient = useQueryClient();
	const createNewPage = useMutation({
		mutationFn: useConvexMutation(api.pages.createNewPage),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["pages"] });
		},
	});

	const form = useForm({
		defaultValues: {
			name: "",
		},
		onSubmit: async ({ value }) => {
			if (!userId) {
				throw new Error("User not found");
			}

			const response = await createNewPage.mutateAsync({
				name: value.name,
				slug,
				userId,
			});

			if (response.status === 200 && response.pageId) {
				toast.success(`Yeah, you're page is created! 🚀`);

				setSelectedPageId(response.pageId);
			} else {
				toast.error("Meh. Something went wrong.", {
					description: (
						<span className="bg-background text-foreground">
							Failed to create the page. Please try again.
						</span>
					),
				});
			}
		},
	});

	// TODO: Add a check if the slug is available - add this as a onChange validation on the name field
	const slug = useStore(form.store, (state) =>
		state.values.name.toLowerCase().replace(/ /g, "-"),
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		form.handleSubmit({
			name: form.getFieldValue("name"),
			slug,
		});
	};

	return (
		<div>
			<form className="space-y-4" onSubmit={handleSubmit}>
				<form.Field
					name="name"
					validators={{
						onChange: z.string().min(1, "Please provide a name, it's required"),
					}}
					// biome-ignore lint/correctness/noChildrenProp: i need to use the children prop
					children={(field) => {
						return (
							<div className="flex flex-col gap-2">
								<Label htmlFor={field.name}>Name</Label>
								<Input
									id={field.name}
									name={field.name}
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
								{field.state.meta.isDirty &&
									field.state.meta.errors.map((error, i) => {
										if (!error) return null;

										return (
											// biome-ignore lint/suspicious/noArrayIndexKey: i want to use the index as key
											<div key={i} className="-mt-1 text-red-500 text-sm">
												{error?.message}
											</div>
										);
									})}
							</div>
						);
					}}
				/>
				<div className="flex flex-col gap-2">
					<Label htmlFor="slug">Slug</Label>
					<div className="flex items-center gap-2">
						<Input id="slug" name="slug" value={slug} disabled />
					</div>
					<div className="-mt-1 text-gray-500 text-xs">
						Your slug will be: https://build-r.dev/preview/{slug}
					</div>
				</div>
				<DialogFooter>
					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}
						// biome-ignore lint/correctness/noChildrenProp: i need to use the children prop
						children={([canSubmit, isSubmitting]) => (
							<Button type="submit" disabled={!canSubmit}>
								{isSubmitting ? "..." : "Submit"}
							</Button>
						)}
					/>
				</DialogFooter>
			</form>
		</div>
	);
};
