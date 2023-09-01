import { theme } from "../../../../tokens";

const values = theme.spaces;

export const properties = {
	paddingTop: values,
	paddingBottom: values,
	paddingLeft: values,
	paddingRight: values,
};

export const shorthands = {
	padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"] as (
		| "paddingBottom"
		| "paddingLeft"
		| "paddingRight"
		| "paddingTop"
	)[],
	paddingHorizontal: ["paddingLeft", "paddingRight"] as (
		| "paddingLeft"
		| "paddingRight"
	)[],
	paddingVertical: ["paddingTop", "paddingBottom"] as (
		| "paddingBottom"
		| "paddingTop"
	)[],
};
