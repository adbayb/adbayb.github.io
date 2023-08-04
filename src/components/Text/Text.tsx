import { View } from "../View";
import { variant } from "./style.css";

export interface TextProps {
	as?: "span" | "p" | "strong" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	children?: string | number | Array<string | number>;
}

const DEFAULT_AS = "span";

export const Text = ({ as = DEFAULT_AS, children }: TextProps) => {
	return (
		<View
			as={as}
			unsafe_class={variant[as as "span" | "p"]}
		>
			{children}
		</View>
	);
};
