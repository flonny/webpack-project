import React from 'react'
import ReactDom from 'react-dom'
import '../style/search.css'
import '../style/search.less'
import '../assets/fonts/iconfont.css'
import cooking from '../assets/cooking.png'
import cook from '../assets/cook.png'
export default function Search() {
  debugger;
  return (
    <div className="search">
      search page
      <div>
        <img src={cooking}/>
        <img src={cook}/>
        <ul className="icon_lists dib-box">
          
          <li className="dib">
            <span className="icon iconfont icon-browse"></span>
            <div className="name">
              browse
            </div>
            <div className="code-name">.icon-browse
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-biyanjing"></span>
            <div className="name">
              闭眼睛
            </div>
            <div className="code-name">.icon-biyanjing
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-icon-test"></span>
            <div className="name">
              view
            </div>
            <div className="code-name">.icon-icon-test
            </div>
          </li>
          
          <li className="dib">
            <span className="icon iconfont icon-icon-test1"></span>
            <div className="name">
              view_off
            </div>
            <div className="code-name">.icon-icon-test1
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

ReactDom.render(<Search/>, document.getElementById('root'))