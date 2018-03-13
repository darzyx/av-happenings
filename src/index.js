import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import 'semantic-ui-css/semantic.min.css'

import './styles/index.css'
import App from './App'
import rootReducer from './reducers/rootReducer'
import registerServiceWorker from './utilities/registerServiceWorker'
import {observeLoginStatus} from './actions/userActions'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {middleware.push(createLogger()) }

const store = createStore(rootReducer, applyMiddleware(...middleware))

const rootDOMNode = document.getElementById('root')

observeLoginStatus()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootDOMNode
)

registerServiceWorker()
