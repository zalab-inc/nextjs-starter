const plugins = require('next-compose-plugins');
const sass = require('@zeit/next-sass')
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const withSass = sass({
  webpack(config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 1000000
        }
      }
    });
    if (config.mode === 'production') {
      if (Array.isArray(config.optimization.minimizer)) {
        config.optimization.minimizer.push(
          new optimizeCssAssetsPlugin({})
        )
      }
    }

    return config;
  }
});

const nextConfig = {
  distDir: '.next',
  poweredByHeader: false,
}

module.exports = plugins(
  [
    withSass,
  ],
  nextConfig
) 