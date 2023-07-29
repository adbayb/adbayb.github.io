module.exports = {
	extends: ["@adbayb", "plugin:astro/recommended"],
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				ecmaVersion: 2020,
				extraFileExtensions: [".astro"],
			},
		},
	],
};
