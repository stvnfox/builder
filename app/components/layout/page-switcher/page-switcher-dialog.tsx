import type { FunctionComponent } from "react";

import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { PageSwitcherForm } from "./page-switcher-form";

type PageSwitcherDialogProps = {
	closeDialog: () => void;
};

export const PageSwitcherDialog: FunctionComponent<PageSwitcherDialogProps> = ({
	closeDialog,
}) => {
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
			<PageSwitcherForm closeDialog={closeDialog} />
		</DialogContent>
	);
};
