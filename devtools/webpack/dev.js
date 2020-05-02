require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const formatter = require('eslint-formatter-pretty');

const options = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: '[name].js',
    publicPath: '/',
  },

  resolve: {
    modules: ['src', 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          formatter,
          emitWarning: false, // build doesn't fail on eslint warnings (but does on eslint errors)
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true, // true outputs JSX tags
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
  },
  devtool: 'cheap-module-eval-source-map',
};

module.exports = options;
