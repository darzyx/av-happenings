import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import './styles/index.css'
import App from './App'
import registerServiceWorker from './utilities/registerServiceWorker'

const rootDOMNode = document.getElementById('root')

render(<App />, rootDOMNode)

registerServiceWorker()
