const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index/index.js',
  },
  output: {
    path: path.join(__dirname, '../../dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader'},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|eot|ttf|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name:'./file/[name][hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'index',
        chunks: ['index'],
        filename:'index.html',
        template:path.join(__dirname,'../index/index.html'),
      }
    ),
  ],

  devServer: {
    contentBase:path.join(__dirname, '../../dist'),
    port: 3001,
    open: true,
    hot: true
  }
}