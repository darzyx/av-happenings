import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import NavBar from './containers/NavBar'
import MenuBar from './containers/MenuBar'
import HomePage from './containers/home/HomePage'
import SubmitPage from './containers/submit/SubmitPage'

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <NavBar />
        <MenuBar />
        <Divider hidden />
        <SubmitPage />
        <Divider hidden />
        <HomePage />
      </div>
    )
  }
}
