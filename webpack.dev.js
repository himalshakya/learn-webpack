const path = require('path');
const {
  merge
} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.scss$/i,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
  })],
});