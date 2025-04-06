import adapter from "@sveltejs/adapter-static"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { EXTENSIONS, mdxPreprocess } from "mdx-svelte"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  extensions: EXTENSIONS,
  preprocess: [mdxPreprocess(), vitePreprocess()],

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      // fallback: "404.html",
    }),
  },
}

export default config
