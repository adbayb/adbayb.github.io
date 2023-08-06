import { theme } from "../../../../tokens";

/**
 * Collection of allowed dimension values combining design token values and generic ones (100vh, ...)
 */
const values = {
	...theme.sizes,
	auto: "auto",
	"100%": "100%",
	"100vh": "100vh",
	"100vw": "100vw",
};

export const properties = {
	minHeight: values,
	maxHeight: values,
	height: values,
	minWidth: values,
	maxWidth: values,
	width: values,
};
