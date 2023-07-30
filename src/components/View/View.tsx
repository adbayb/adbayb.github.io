import { type JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { createPolymorphicComponent } from "../createPolymorphicComponent";
import { type Styles, styleKeys, styles } from "./styles.css";

export interface ViewProps extends Styles {
	children: JSX.Element;
}

const DEFAULT_AS = "div";

export const View = createPolymorphicComponent<ViewProps, typeof DEFAULT_AS>(
	({ as = DEFAULT_AS, children, ...restProps }) => {
		const [styleProps, otherProps] = splitProps(restProps, styleKeys);

		return (
			<Dynamic
				{...otherProps}
				component={as}
				class={styles(styleProps)}
			>
				{children}
			</Dynamic>
		);
	}
);
