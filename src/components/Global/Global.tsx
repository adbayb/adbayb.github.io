/**
 * For the sake of simplicity, the CSS reset is managed globally and should be imported first in the application
 * The `Global` file is used as a way to enforce this first import behavior (the `Global` component needs to be instantiated at the application root)
 * Another alternative will be to reset locally each element by implemention local reset techniques into the `View` component
 * @see https://sandroroth.com/blog/vanilla-extract-approach#box-component
 */
// eslint-disable-next-line import/no-unassigned-import
import "./reset.css";

export const Global = () => {
	return (
		<meta
			name="viewport"
			content="width=device-width"
		/>
	);
};
