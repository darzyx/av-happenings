import React, { Component } from 'react';
import NavBar from './containers/NavBar';
import MenuBar from './containers/MenuBar';
import Home from './containers/Home';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <MenuBar />
        <Home />
      </div>
    );
  }
}
