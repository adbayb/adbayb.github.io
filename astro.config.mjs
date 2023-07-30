import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
// eslint-disable-next-line import/namespace
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	integrations: [solidJs()],
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
});
