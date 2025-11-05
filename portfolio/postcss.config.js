module.exports = {
  // Include Tailwind plugin only when explicitly requested (e.g. during
  // development). For production builds we will pre-generate the CSS with
  // the Tailwind CLI and avoid loading the plugin to prevent build-time
  // require() errors in some environments.
  plugins: (() => {
    const plugins = {};
    // Always include autoprefixer
    plugins.autoprefixer = require('autoprefixer');

    if (process.env.INCLUDE_TAILWIND === '1') {
      // Use the adapter implementation for PostCSS when requested
      plugins.tailwindcss = require('@tailwindcss/postcss');
    }

    return plugins;
  })(),
};
