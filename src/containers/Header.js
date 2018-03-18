import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Grid, Header as Heading, Segment } from 'semantic-ui-react'

import '../styles/Header.css'
import UserModal from './UserModal'
import NavModal from './NavModal'

class Header extends Component {
  render() {
    const { _user } = this.props

    return (
      <Segment attached='top' basic id='header' inverted>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Heading as={Link} inverted to='/'>AV Happenings</Heading>
              <br />
              {
                _user.loggedIn ?
                <p>Hello, <UserModal user={_user} />!</p> :
                <p>
                  <Link className='header-link' to='/login'>Log In </Link>
                  or
                  <Link className='header-link' to='/signup'> Sign Up</Link>
                </p>
              }
            </Grid.Column>
            <Grid.Column width={6}><NavModal /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

Header.propTypes = {
  _user: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  _user: state.user
})

export default connect(mapStateToProps, null)(Header)
