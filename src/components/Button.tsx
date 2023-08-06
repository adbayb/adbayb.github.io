import { View } from "./View";
import { Text } from "./Text";

export const Button = () => {
	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{
				default: "surface.primary",
				focus: "surface.secondary",
				hover: "surface.secondary",
			}}
		>
			<Text>Span</Text>
			<Text as="p">P</Text>
		</View>
	);
};
