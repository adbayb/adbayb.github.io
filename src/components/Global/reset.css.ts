import { globalStyle } from "@vanilla-extract/css";
import { theme } from "../../tokens";

/**
 * CSS reset
 */
globalStyle(`*`, {
	all: "unset",
	display: "revert",
});

globalStyle(":root", {
	...theme.typographies.body,
	margin: 0,
	padding: 0,
	boxSizing: "border-box",
});

globalStyle("*, *::before, *::after", {
	boxSizing: "inherit",
});
