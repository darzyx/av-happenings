import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './containers/header/Header'
import HomePage from './containers/home/HomePage'
import SubmitPage from './containers/submit/SubmitPage'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id='app'>
          <Header />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/submit' component={SubmitPage} />
            <Route path='/help' component={HelpPage} />
            <Route path='/about' component={AboutPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
