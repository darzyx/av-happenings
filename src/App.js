import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RouterScrollReset from './containers/RouterScrollReset'
import { observeLoginStatus } from './actions/userActions'
import Banner from './components/Banner'
import HomePage from './containers/HomePage'
import LogInPage from './components/LogInPage'
import SignUpPage from './components/SignUpPage'
import SubmitPage from './components/SubmitPage'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

class App extends Component {
  componentDidMount() { this.props._observeLoginStatus() }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RouterScrollReset>
          <div id='app'>
            <Banner />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' component={LogInPage} />
              <Route path='/signup' component={SignUpPage} />
              <Route path='/submit' component={SubmitPage} />
              <Route path='/help' component={HelpPage} />
              <Route path='/about' component={AboutPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </RouterScrollReset>
      </BrowserRouter>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  _observeLoginStatus: () => dispatch(observeLoginStatus())
})

export default connect(null, mapDispatchToProps)(App)
