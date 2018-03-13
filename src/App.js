import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'

import RouterScrollReset from './containers/RouterScrollReset'
import {observeLoginStatus} from './actions/userActions'
import LoadingDimmer from './components/LoadingDimmer'
import Banner from './containers/Banner'
import HomePage from './containers/HomePage'
import LogInPage from './components/LogInPage'
import SignUpPage from './components/SignUpPage'
import SubmitPage from './components/SubmitPage'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import NotFoundPage from './components/NotFoundPage'

class App extends Component {
  componentDidMount() {this.props._observeLoginStatus() }

  render() {
    const {_loggedIn, _userLoaded} = this.props

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <RouterScrollReset>
        {
          _userLoaded ?
          <div id='app'>
            <Banner />
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/login' render={() =>
                _loggedIn ? <Redirect to='/' /> : <LogInPage />
              }/>
              <Route path='/signup' component={SignUpPage} />
              <Route path='/submit' render={() =>
                _loggedIn ? <SubmitPage /> : <Redirect to='/login' />
              }/>
              <Route path='/help' component={HelpPage} />
              <Route path='/about' component={AboutPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div> :
          <LoadingDimmer />
        }
        </RouterScrollReset>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = state => ({
  _loggedIn: state.user.loggedIn,
  _userLoaded: state.user.loaded
})

const mapDispatchToProps = dispatch => ({
  _observeLoginStatus: () => dispatch(observeLoginStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
