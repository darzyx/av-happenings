import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Divider } from 'semantic-ui-react'
import NavigationBar from './containers/navigation/NavigationBar'
import MenuBar from './containers/menu/MenuBar'
import HomePage from './containers/home/HomePage'
import SubmitPage from './containers/submit/SubmitPage'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div id='app'>
          <NavigationBar />
          <MenuBar />
          <Divider hidden />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/submit' component={SubmitPage} />
          <Divider hidden />
        </div>
      </BrowserRouter>
    )
  }
}
