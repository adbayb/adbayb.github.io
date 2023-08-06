import { theme } from "../../../../tokens";

const values = theme.spaces;

export const properties = {
	paddingTop: values,
	paddingBottom: values,
	paddingLeft: values,
	paddingRight: values,
};

export const shorthands = {
	padding: [
		"paddingTop",
		"paddingBottom",
		"paddingLeft",
		"paddingRight",
	] as Array<"paddingTop" | "paddingBottom" | "paddingLeft" | "paddingRight">,
	paddingHorizontal: ["paddingLeft", "paddingRight"] as Array<
		"paddingLeft" | "paddingRight"
	>,
	paddingVertical: ["paddingTop", "paddingBottom"] as Array<
		"paddingTop" | "paddingBottom"
	>,
};
