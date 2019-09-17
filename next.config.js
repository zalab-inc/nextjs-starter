const { withPlugins, optional } = require('next-compose-plugins');
const sass = require('@zeit/next-sass');
const optimize = require("optimize-css-assets-webpack-plugin");
const images = require('next-images');
const purgecss = require('next-purgecss');
const fonts = require('next-fonts');
const size = require('next-size');

const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_EXPORT,
} = require('next-server/constants');

const config =  {
  distDir: '.next',
  poweredByHeader: false,
}

// [plugin: function, configuration?: object, phases?: array]
module.exports = withPlugins(
  [
    // with sass
    [
      sass,
      {
        sassLoaderOptions: {
          outputStyle: 'expanded',
        },
        [PHASE_PRODUCTION_BUILD]: {
          sassLoaderOptions: {
            outputStyle: 'compressed',
          },
        }
      }
    ],
    [purgecss, {}, [PHASE_PRODUCTION_BUILD]],
    images,
    fonts,
    size,
  ],
  config
) 