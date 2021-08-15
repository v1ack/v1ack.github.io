const tailwindcss = require("tailwindcss")
const postcssImport = require("postcss-import")
const autoprefixer = require("autoprefixer")

module.exports = {
  syntax: "postcss-scss",
  plugins: [
    postcssImport(),
    tailwindcss(),
    autoprefixer({
      cascade: true,
    }),
  ],
}
