import React, { Component } from 'react'
import ReactDom from 'react-dom'
import './search.less'
import './font/iconfont.css'
import aturo from './8.jpg'
function Clock() {
  return (
    <div>
      <h1>Hello Clock</h1>
      <img src={aturo} />
      <div>

        <span class="icon iconfont icon-browse"></span>
        <div class="name">
          browse
            </div>
        <div class="code-name">.icon-browse
            </div>

      </div>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </div>
  )
}
function RenderClock() {
  ReactDom.render(<Clock />, document.getElementById('root'))
}
setInterval(RenderClock, 1000)