import type { Component, ComponentProps, JSX } from "solid-js";

type AnyElement = keyof JSX.IntrinsicElements | Component<any>;

type PropsOf<As extends AnyElement> = ComponentProps<As>;

/**
 * Helper to create a polymorphic component
 */
export const createPolymorphicComponent = <
	OwnProps extends object,
	DefaultAs extends AllowedAs,
	AllowedAs extends AnyElement = AnyElement,
>(
	Component: (props: PolymorphicProps<OwnProps, DefaultAs>) => JSX.Element
) => {
	return Component as {
		// If `as` is provided consumer-side, use it to infer props:
		<As extends AllowedAs>(props: PolymorphicProps<OwnProps, As>): JSX.Element;
		// If no provided `as` property, use the default `as` element to infer props:
		(props: Omit<PolymorphicProps<OwnProps, DefaultAs>, "as">): JSX.Element;
	};
};

/**
 * Utility type to create polymorphic props by:
 * - Inheriting props from the own provided consumer-side (eg. ViewOwnProps)
 * - Inferring props from the defined `as` element
 */
type PolymorphicProps<
	OwnProps extends object,
	As extends AnyElement,
> = OwnProps & {
	as: As;
} & Omit<PropsOf<As>, keyof OwnProps | "as">;
