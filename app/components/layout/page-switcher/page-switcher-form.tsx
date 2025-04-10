import type { FunctionComponent } from "react";

import { useForm, useStore } from "@tanstack/react-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";

const formSchema = z.object({
	name: z.string().min(1, "Please provide a name, it's required"),
	slug: z.string().min(1, "Please provide a slug, it's required"),
});

export const PageSwitcherForm: FunctionComponent = () => {
	const form = useForm({
		defaultValues: {
			name: "",
			slug: "",
		},
		validators: {
			onChange: formSchema,
		},
		onSubmit: async ({ value }) => {
			console.log(value);

			//TODO: Create the actual page
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		console.log("isSubmitted");
		e.preventDefault();
		e.stopPropagation();
		form.handleSubmit({
			name: form.getFieldValue("name"),
			slug: form.getFieldValue("slug"),
		});
	};
	return (
		<div>
			<form className="space-y-4" onSubmit={handleSubmit}>
				<form.Field
					name="name"
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
				<form.Field
					name="slug"
					children={(field) => {
						return (
							<div className="flex flex-col gap-2">
								<Label htmlFor={field.name}>Slug</Label>
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
				<DialogFooter>
					<form.Subscribe
						selector={(state) => [state.canSubmit, state.isSubmitting]}
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
