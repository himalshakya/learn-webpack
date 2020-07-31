const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
  merge
} = require('webpack-merge');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: '[name].[contentHash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(), new TerserPlugin(),
    ],
  },
  plugins: [new CleanWebpackPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
    template: './src/template.html',
    minify: {
      removeComments: true,
      removeAttributeQuotes: true,
      collapseWhitespace: true,
    },
  })],
  module: {
    rules: [{
      test: /\.scss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }],
  },
});