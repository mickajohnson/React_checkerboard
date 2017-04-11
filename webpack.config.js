var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './main.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/webpacked_code'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Checkerboard',
      template: 'my_template.ejs'
    })]
}
