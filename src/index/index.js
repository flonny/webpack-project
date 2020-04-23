import React, { Component } from 'react'
import ReactDom from 'react-dom'
class Clock extends Component {
constructor(props) {
  super(props)
  this.state = {
    date: new Date()
  }
}

render() {
  return (
    <div>
      {this.state.date.toLocaleTimeString()}
    </div>);
}
}
ReactDom.render(<Clock />, document.getElementById('root'))
export default Clock;
