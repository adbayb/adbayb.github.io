import { defineConfig } from "astro/config";
import lit from "@astrojs/lit";

// https://astro.build/config
// eslint-disable-next-line import/no-default-export
export default defineConfig({
	integrations: [lit()],
});
