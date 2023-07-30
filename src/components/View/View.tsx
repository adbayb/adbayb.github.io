import type { JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import { type Styles, styles } from "./styles.css";

export interface ViewProps extends Styles {
	as?: "div" | "button";
	children: JSX.Element;
}

export const View = ({ as = "div", children, ...styleProps }: ViewProps) => {
	return (
		<Dynamic
			component={as}
			class={styles(styleProps)}
		>
			{children}
		</Dynamic>
	);
};
