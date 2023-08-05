import { View } from "./View";
import { Text } from "./Text";

export const Button = () => {
	return (
		<View
			as="button"
			paddingX="small"
			backgroundColor={{ small: "primary", hover: "secondary" }}
		>
			<Text>Span</Text>
			<Text as="p">P</Text>
		</View>
	);
};
