/*webpack-pro/webpack.config.js*/
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    search: './src/search.js'
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        loader: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(woff|woff2|eot|svg|ttf)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100240
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/index.html'),
      filename: 'index.html',
      chunks: ['index'],
      minify: {
        html5: true,
        minifyCSS: true,
        minifyJS: true,
        collapseWhitespace: true
      }
    })

  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 3001,
    open: true,
    compress: true,
  }
}