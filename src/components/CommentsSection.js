import React from 'react'
import { Header as Heading, Loader, Message } from 'semantic-ui-react'

const CommentsSection = ({ comments }) =>
  <React.Fragment>
  <Heading>Comments</Heading>
  {
    comments.isGetting ?
    <Loader active content='Loading...' inline='centered' /> :
    comments.items.length === 0 ?
    <center>
      <Message content='No comments here yet!' header='Empty' />
    </center> :
    comments.items.map((comment, key) =>
      <Message
        content={comment.description}
        header={comment.username}
        key={key}
      />
    )
  }
  </React.Fragment>

export default CommentsSection
