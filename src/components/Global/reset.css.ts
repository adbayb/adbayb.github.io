import { globalStyle } from "@vanilla-extract/css";

import { theme } from "../../tokens";

/**
 * CSS reset
 */
globalStyle(`*`, {
	all: "unset",
	display: "revert",
	outline: "revert",
});

globalStyle(":root", {
	...theme.typographies.body,
	color: theme.colors.contentPrimary,
	// backgroundColor: theme.colors["surface.primary"],
	margin: 0,
	padding: 0,
	boxSizing: "border-box",
});

globalStyle("*, *::before, *::after", {
	boxSizing: "inherit",
});
