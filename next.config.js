const withCSS = require("@zeit/next-css");
const path = require("path");

module.exports = withCSS({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: "linaria/loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production"
          }
        }
      ]
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      layout: path.resolve(__dirname, "layout"),
      components: path.resolve(__dirname, "components")
    };
    return config;
  }
});
