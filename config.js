/** @type {import('@maizzle/framework').Config} */

module.exports = {
  inlineCSS: true,
  build: {
    tailwindcss: {
      css: "src/css/tailwind.css",
      config: "tailwind.config.js",
    },
    templates: {
      source: "src/templates",
      destination: {
        path: "build_local",
      },
      assets: {
        source: "src/images",
        destination: "images",
      },
    },
  },
};
