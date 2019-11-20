import React from "react"
import ReactDom from "react-dom"
import Index from "./view/index/index"
import {Provider} from "react-redux"
import store from "./store/index"
ReactDom.render(
    <Provider store={store}>
        <Index/>
    </Provider>,
    document.getElementById('root')
)