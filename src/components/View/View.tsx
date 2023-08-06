import { type JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import { AnyElement, createPolymorphComponent } from "./polymorphism";
import { type StyleProps, styles } from "./styles/index.css";

export interface ViewProps extends StyleProps {
	unsafe_class?: JSX.HTMLAttributes<unknown>["class"];
	unsafe_style?: JSX.HTMLAttributes<unknown>["style"];
	children?: JSX.Element;
}

const DEFAULT_AS = "div";
const STYLE_PROPS_KEYS = Array.from(styles.properties.keys());

export const View = createPolymorphComponent<
	ViewProps,
	AnyElement,
	typeof DEFAULT_AS
>(({ as = DEFAULT_AS, children, unsafe_class, unsafe_style, ...restProps }) => {
	const [styleProps, otherProps] = splitProps(restProps, STYLE_PROPS_KEYS);

	return (
		<Dynamic
			{...otherProps}
			component={as}
			class={[unsafe_class, styles(styleProps)].join(" ")}
			style={unsafe_style}
		>
			{children}
		</Dynamic>
	);
});
