import { styleVariants } from "@vanilla-extract/css";
import { theme } from "../../tokens";

export const stylesByElement = styleVariants({
	span: {
		color: theme.colors.dark,
	},
	p: {
		color: theme.colors.light,
	},
});
