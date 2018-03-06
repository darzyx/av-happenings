import React, { Component } from 'react'
import NavBar from './containers/NavBar'
import MenuBar from './containers/MenuBar'
import Dashboard from './containers/Dashboard'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <MenuBar />
        <Dashboard />
      </div>
    )
  }
}
