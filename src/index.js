import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './search.less'
import './font/iconfont.css'
import aturo from './8.jpg'
import UploadFile from './components/UploadFile'
import {converStringToNumber,converNumberToString} from './utils/utils'
function App() {
  // console.log(converStringToNumber('100.23231213123'))
  console.log(converNumberToString(1.25))
  return (
    <div>
      <h1>Hello Clock</h1>
      <div>
        <UploadFile />
      </div>
    </div>
  )
}
ReactDom.render(<App />, document.getElementById('root'))