import preprocess from "svelte-preprocess"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"
import adapter from "@sveltejs/adapter-static"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
    defaults: {
      style: "scss",
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
    scss: {
      prependData: `@import 'src/tailwind.scss';`,
      outputStyle: "compressed",
    },
  }),

  kit: {
    adapter: adapter({
      pages: "build",
      assets: "build",
      // fallback: "404.html",
    }),
    prerender: {
      crawl: true,
      enabled: true,
      entries: ["*"],
      onError: "continue",
    },
  },
}

export default config
