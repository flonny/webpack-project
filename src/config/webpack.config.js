const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index/index.js',
    search: './src/search/index.js'
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      {
        title: 'index',
        chunks: ['index'],
        filename:'index.html',
        template:path.join(__dirname,'../index/index.html'),
      }
    ),
    new HtmlWebpackPlugin(
      {
        title: 'search',
        chunks: ['search'],
        filename:'search.html',
        template:path.join(__dirname,'../search/index.html'),
      }
    ),
  ]
}