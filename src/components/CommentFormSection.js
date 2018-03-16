import React from 'react'
import { Link } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

import CommentForm from '../containers/CommentForm'

const CommentFormSection = ({ eid, loggedIn }) =>
  <React.Fragment>
  {
    loggedIn ?
    <CommentForm eid={eid} /> :
    <center>
      <Message>
        <Link to='/login'>Log In </Link>
        or
        <Link to='/signup'> Sign Up </Link>
        in order to join the discussion!
      </Message>
    </center>
  }
  </React.Fragment>

export default CommentFormSection
