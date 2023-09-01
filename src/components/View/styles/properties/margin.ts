import { theme } from "../../../../tokens";
import { negate } from "../helpers";

const values = { ...negate(theme.spaces), auto: "auto" };

export const properties = {
	marginTop: values,
	marginBottom: values,
	marginLeft: values,
	marginRight: values,
};

export const shorthands = {
	margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"] as (
		| "marginBottom"
		| "marginLeft"
		| "marginRight"
		| "marginTop"
	)[],
	marginHorizontal: ["marginLeft", "marginRight"] as (
		| "marginLeft"
		| "marginRight"
	)[],
	marginVertical: ["marginTop", "marginBottom"] as (
		| "marginBottom"
		| "marginTop"
	)[],
};
