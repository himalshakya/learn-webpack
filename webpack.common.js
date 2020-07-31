const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [{
      test: /\.html$/i,
      loader: 'html-loader',
    }, {
      test: /\.(svg|png|jpe?g|gif)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'assets',
        },
      },
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './src/template.html',
  })],
};