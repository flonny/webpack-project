import React from 'react'
import ReactDom from 'react-dom'
import '../style/search.css'
import '../style/search.less'
import '../assets/fonts/iconfont.css'
import cooking from '../assets/cooking.png'
import cook from '../assets/cook.png'
export default function Search() {
  return (
    <div className="search">
      search page
      <div>
        <img src={cooking}/>
        <img src={cook}/>
        <ul class="icon_lists dib-box">
          
          <li class="dib">
            <span class="icon iconfont icon-browse"></span>
            <div class="name">
              browse
            </div>
            <div class="code-name">.icon-browse
            </div>
          </li>
          
          <li class="dib">
            <span class="icon iconfont icon-biyanjing"></span>
            <div class="name">
              闭眼睛
            </div>
            <div class="code-name">.icon-biyanjing
            </div>
          </li>
          
          <li class="dib">
            <span class="icon iconfont icon-icon-test"></span>
            <div class="name">
              view
            </div>
            <div class="code-name">.icon-icon-test
            </div>
          </li>
          
          <li class="dib">
            <span class="icon iconfont icon-icon-test1"></span>
            <div class="name">
              view_off
            </div>
            <div class="code-name">.icon-icon-test1
            </div>
          </li>
          
        </ul>
      </div>
    </div>
  )
}

ReactDom.render(<Search/>, document.getElementById('root'))