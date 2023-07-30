import {
	type ComponentProps,
	type JSX,
	type ValidComponent,
	splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";
import { type Styles, styleKeys, styles } from "./styles.css";

export interface ViewProps extends Styles {
	children: JSX.Element;
}

export const View: PolymorphicComponent<ViewProps> = ({
	as = "div",
	children,
	...restProps
}) => {
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
};

type PropsOf<As extends ValidComponent> = ComponentProps<As>;

/**
 * Utility type to create a polymorphic component
 */
type PolymorphicComponent<OwnProps extends object> = <
	As extends ValidComponent = keyof JSX.IntrinsicElements,
>(
	props: PolymorphicProps<As, OwnProps>
) => JSX.Element;

/**
 * Utility type to create polymorphic props by:
 * - Inheriting props from the own provided consumer-side (eg. ViewOwnProps)
 * - Inferring props from the defined `as` element
 */
type PolymorphicProps<
	As extends ValidComponent,
	OwnProps extends object,
> = OwnProps & {
	as: As;
} & Omit<PropsOf<As>, keyof OwnProps | "as">;
