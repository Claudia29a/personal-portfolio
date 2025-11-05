module.exports = {
  plugins: [
    // Use the new PostCSS adapter for Tailwind (require it so the build picks up the function)
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
}
