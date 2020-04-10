const path = require('path');
const glob = require("glob")
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
function getEntryConf() {
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  const dirnameReg = /src\/(.*)\/index\.js$/
  return entryFiles.reduce((entryObj, file) => {
    const fileMatch = file.match(dirnameReg)
    const entryName = fileMatch[1]
    if (!entryObj.entry) {
      entryObj.entry = {}
    }
    if (!entryObj.htmlPlugins) {
      entryObj.htmlPlugins = []
    }
    if (!entryObj.entry[entryName]) {
      entryObj.entry[entryName] = `./src/${entryName}/index.js`
    }
    entryObj.htmlPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `./src/${entryName}/index.html`),
        filename: `${entryName}.html`,
        chunks: [entryName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    )
    return entryObj
  }, {})
}
const entryConf = getEntryConf()
module.exports = {
  mode: 'development',
  entry: entryConf.entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "less-loader",
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')({
                  overrideBrowserslist: [
                    'last 2 version',
                    ">1%",
                  ]
                })
              ]
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUit: 75,
              remPrecision: 8
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|ttf|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: '[name][hash:4].[ext]',
              limit: '20000'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...entryConf.htmlPlugins,
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash:8].css"
    }),
    new OptimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    port: 3000
  },
  devtool: 'source-map'
}