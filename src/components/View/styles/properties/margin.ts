import { theme } from "../../../../tokens";
import { negate } from "../helpers";

const values = negate(theme.spaces);

export const properties = {
	marginTop: values,
	marginBottom: values,
	marginLeft: values,
	marginRight: values,
};
