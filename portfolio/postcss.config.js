module.exports = {
  plugins: {
    // Use the adapter module name so build tools that load plugins by key
    // will require the adapter package instead of `tailwindcss` itself.
    tailwindcss: '@tailwindcss/postcss',
    autoprefixer: 'autoprefixer',
  },
}
