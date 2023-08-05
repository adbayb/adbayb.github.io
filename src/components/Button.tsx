import { View } from "./View";
import { Text } from "./Text";

export const Button = () => {
	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{
				default: "primary",
				focus: "secondary",
				hover: "secondary",
			}}
		>
			<Text>Span</Text>
			<Text as="p">P</Text>
		</View>
	);
};
