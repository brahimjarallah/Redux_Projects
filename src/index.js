import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import postRecucer from './postRecucer'
import thunk from 'redux-thunk'
import App from './App'
const store = createStore(postRecucer, applyMiddleware(thunk))
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
