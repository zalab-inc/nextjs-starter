const nextComposePlugins = require('next-compose-plugins');
// const nextCss = require('@zeit/next-css')
const nextSass = require('@zeit/next-sass')
const optimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");


// const withCss = nextCss();
const withSass = nextSass({
  webpack(config, options) {
    // config.module.rules.push({
    //   test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       limit: 1000000
    //     }
    //   }
    // });
    // config.module.rules.push({
    //   test: /\.(png|jpe?g|gif)$/i,
    //   loader: 'file-loader',
    //   options: {
    //     name: '[path][name].[ext]',
    //   },
    // });

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

module.exports = nextComposePlugins(
  [
    // withCss,
    withSass,
  ],
  nextConfig
) 