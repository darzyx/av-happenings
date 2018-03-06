import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import NavBar from './containers/NavBar'
import MenuBar from './containers/MenuBar'
import NewEventForm from './containers/NewEventForm'
import Dashboard from './containers/Dashboard'

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <NavBar />
        <MenuBar />
        <Divider hidden />
        <NewEventForm />
        <Divider hidden />
        <Dashboard />
      </div>
    )
  }
}
