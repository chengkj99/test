const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, '../main.js'),
  // entry: '../main.js',这里的路径是相对于命令执行路径执行的，建议使用上面的方式
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
    // publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.vue', '.json'], //省略后缀名
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        },
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
