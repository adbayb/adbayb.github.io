import { style, styleVariants } from "@vanilla-extract/css";
import { styleVariable } from "../Global";

const base = style({ padding: 12 });

const stylesByVariant = {
	span: {
		color: styleVariable.color["blue-50"],
	},
	p: {
		color: styleVariable.color["red-50"],
	},
} as const;

export const variant = styleVariants(stylesByVariant, (variant) => [
	base,
	variant,
]);
