import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Grid, Header, Segment} from 'semantic-ui-react'

import UserModal from './UserModal'
import NavModal from './NavModal'

class Banner extends Component {
  render() {
    const {_user} = this.props

    return (
      <Segment attached='top' basic id='header' inverted>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column width={10}>
              <Header as={Link} inverted to='/'>
                Antelope Valley Happenings
              </Header>
              <br />
              {
                _user.loggedIn ?
                <div><p>Hello, <UserModal user={_user} />!</p></div> :
                <div>
                  <p>
                    <Link className='banner-link' to='/login'>Log In </Link>
                    or
                    <Link className='banner-link' to='/signup'> Sign Up</Link>
                  </p>
                </div>
              }
            </Grid.Column>
            <Grid.Column width={6}>
              <NavModal />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

const mapStateToProps = state => ({
  _user: state.user
})

export default connect(mapStateToProps, null)(Banner)
