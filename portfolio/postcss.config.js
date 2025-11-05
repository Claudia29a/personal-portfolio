module.exports = {
  plugins: {
    // Angular's stylesheet plugin expects plugin names as keys. Map the
    // `tailwindcss` key to the new adapter function so the build system
    // doesn't try to use `tailwindcss` directly as a PostCSS plugin.
    tailwindcss: require('@tailwindcss/postcss'),
    autoprefixer: require('autoprefixer'),
  },
}
