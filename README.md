# webpack
*webpack*是目前最流行的前端构建工具，这是我从零开始配置学习webpack一系列记录，作为学习webpack的一个总结

## 安装*webpack*

1. 新建一个文件夹名为*webpack-pro*,进入文件夹并运行 npm init 命令创建一个最简单的*package.json*文件

   ```javascript
   npm int -y //-y所有选择默认yes
   ```

2. 安装webpack, webpack 4.x 需要单独安装 webpack-cli

   ```javascript
   npm install webpack-cli webpack -D
   ```

3. 再跟目录下新建 *webpack.config.js* 文件以及src/index.js，并在package.json script 种添加命令 

   ```javascript
   /*webpack-pro/webpack.config.js*/
   const path=require('path')
   module.exports = {
       mode: 'production',
       entry: './src/index.js',
       output: {
           path: path.join(__dirname,'./dist'),
           filename: 'bundle.js'
       }
   }
   ```

   ```javascript
   /*src/index.js*/
   document.write('hello world')
   ```

   ```javascript
   /*package.json*/
   "script": {
       "build": "webpack --config ./webpack.config.js"
   }
   ```

4. 运行 `npm run build`命令，生成 *dist/bundle.js* 文件，在dist 文件种新建index.html文件，并引入bundle.js, 打开index.html，页面应该显示`hello world`

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
     <script src="./bundle.js"></script>
   </head>
   <body>
     
   </body>
   </html>
   ```

## 多页面打包

更改webpack.config.js配置, entry 用key:value的形式配置，key是构建的chunk名，value 是构建文件

[name] 是占位符，固定写法，代表打包的chunk名

```javascript
/*webpack-pro/webpack.config.js*/
const path=require('path')
module.exports = {
    mode: 'production',
    entry: {
      index: './src/index.js',
      search: './src/search.js'
    },
    output: {
        path: path.join(__dirname,'./dist'),
        filename: '[name].js'
    }
}
```

## 解析es6以及react

> 涉及到的npm package: `babel-loader `，`@babel/core`，`@babel/preset-env`，
>
> `@babel/preset-react`，`react`，`react-dom`

1. 安装babel-loader，@babel/core，@babel/preset-env，@babel/preset-react

  ```javascript
  npm i babel-loader @babel/preset-env @babel/preset-react -D
  ```

2. 配置webpack.config.js

  ```javascript
  /*webpack-pro/webpack.config.js*/
  const path = require('path')
  module.exports = {
    mode: 'production',
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
     { test: /\.js/, loader: 'babel-loader' }
   ]
    }
  }
  ```

3. 安装react 和react-dom

  ```javascript
  npm install react react-dom -D
  ```

4. 在seach.js中写一个react 组件，并注入到index.html 中，index.html 需要有一个id为root 的div

  ```javascript
  import React, { Component } from 'react'
  import ReactDom from 'react-dom'
  function Clock () {
    return (
   <div>
     <h1>Hello Clock</h1>
     <h2>{new Date().toLocaleTimeString()}</h2>
   </div>
    ) 
  }
  function RenderClock() {
    ReactDom.render(<Clock/>,document.getElementById('root'))
  }
  setInterval(RenderClock,1000)
  ```

## 解析css,less

> 涉及到的npm package: `css-loader`，`style-loader`，`less-loader`，`less`

1. 安装`css-loader`，`style-loader`，`less-loader`,`less`

   ```javascript
   npm install css-loader style-loader less-loader less -D
   ```

   

2. 在src目录下新建一个index.css 和 search.less并在js文件中引入

## 解析图片和字体

> 涉及npm 包 `file-loader`，`url-loader`