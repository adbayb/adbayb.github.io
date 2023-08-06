import { theme } from "../../../../tokens";
import { negate } from "../helpers";

const values = negate(theme.spaces);

export const properties = {
	marginTop: values,
	marginBottom: values,
	marginLeft: values,
	marginRight: values,
};

export const shorthands = {
	margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"] as Array<
		"marginTop" | "marginBottom" | "marginLeft" | "marginRight"
	>,
	marginHorizontal: ["marginLeft", "marginRight"] as Array<
		"marginLeft" | "marginRight"
	>,
	marginVertical: ["marginTop", "marginBottom"] as Array<
		"marginTop" | "marginBottom"
	>,
};
