import { View } from "./View";
import { Text } from "./Text";

export const Button = () => {
	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{ small: "blue-10", hover: "gray-20" }}
		>
			<Text>Span</Text>
			<Text as="p">P</Text>
		</View>
	);
};
