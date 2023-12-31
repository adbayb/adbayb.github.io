import { View } from "../View";
import type { Label } from "../types";

import { stylesByElement } from "./styles.css";

export type TextProps = {
	as?: "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "strong";
	children?: Label;
};

const DEFAULT_AS = "span";

export const Text = ({ as = DEFAULT_AS, children }: TextProps) => {
	return (
		<View
			as={as}
			unsafe_class={stylesByElement[as as "p" | "span"]}
		>
			{children}
		</View>
	);
};
