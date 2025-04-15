import type { FunctionComponent } from "react";

import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { PageSwitcherForm } from "./page-switcher-form";

export const PageSwitcherDialog: FunctionComponent = () => {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Create a New Page</DialogTitle>
				<DialogDescription>
					Start building a beautiful, high-converting landing page in minutes.
					Just give your page a name and prefered url to get started — you can
					customize everything later.
				</DialogDescription>
			</DialogHeader>
			<PageSwitcherForm />
		</DialogContent>
	);
};
