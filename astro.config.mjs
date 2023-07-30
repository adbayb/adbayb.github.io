import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	integrations: [solidJs()],
});
