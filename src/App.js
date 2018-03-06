import React, { Component } from 'react';
import NavBar from './containers/NavBar';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavBar />
        <h1>Hello, world!!</h1>
      </div>
    );
  }
}
