const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
let merge = require('webpack-merge');
let common = require('./common.js');

const prodConfig = merge(common, {
  output: {
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js',
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
});

module.exports = prodConfig;
