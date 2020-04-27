import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './search.less'
import './font/iconfont.css'
import aturo from './8.jpg'
import UploadFile from './components/UploadFile'
function App() {
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