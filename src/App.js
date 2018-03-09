import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Banner from './components/Banner'
import HomePage from './containers/HomePage'
import SubmitPage from './components/SubmitPage'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id='app'>
          <Banner />
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
