module.exports = {
  mode: "jit",
  purge: {
    content: ["./src/**/*.{html,js,svelte,ts}"],
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      listStyleType: ["hover", "focus"],
      listStylePosition: ["hover", "focus"],
    },
  },
  plugins: [],
}
