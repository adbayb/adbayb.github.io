import { styleVariants } from "@vanilla-extract/css";

import { theme } from "../../tokens";

export const stylesByElement = styleVariants({
	span: theme.typographies.body,
	p: theme.typographies.body,
});
