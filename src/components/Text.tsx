import { createPolymorphComponent } from "./polymorphism";
import { View, type ViewProps } from "./View";

export type TextProps = ViewProps;

const DEFAULT_AS = "span";

export const Text = createPolymorphComponent<
	TextProps,
	"span" | "p" | "strong" | "em" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
	typeof DEFAULT_AS
>(({ as = "span", children }) => {
	return <View as={as}>{children}</View>;
});
