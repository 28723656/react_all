import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from "redux";

import App from './components/App'
import {counter} from "./redux/reducers";

// 生成一个store对象

const store = createStore(counter)
console.log(store)

function render(){
    ReactDOM.render(<App  store = {store} />,document.getElementById('root'))
}

// 初始化渲染
render()

// 订阅监听 store中的状态变化了，就自动重绘
store.subscribe( render )
