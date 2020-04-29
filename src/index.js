import React, { Component } from 'react'
import ReactDom from 'react-dom'
import {converStringToNumber,converNumberToString} from './utils/utils'
function App() {
  const string =  '1e2'
  console.log(string,converStringToNumber(string,2))
  console.log(converNumberToString(converStringToNumber(string,10),10))
  return (
    <div>
    </div>
  )
}
ReactDom.render(<App />, document.getElementById('root'))