
const path = require('path')
const webpack = require('webpack')
module.exports = {

  entry: {
    app: path.resolve(__dirname, 'mvvm.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'), //打包文件的输出地址
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
