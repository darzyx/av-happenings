import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Header as Heading, Message } from 'semantic-ui-react'

import { deleteComment } from '../actions/commentDeleteActions'

class CommentsSection extends Component {
  constructor(props) {
    super(props)

    this._handleDeleteClick = this._handleDeleteClick.bind(this)
  }

  _handleDeleteClick(eid, cid) {
    this.props._deleteComment(eid, cid)
  }

  render() {
    const { comments, eid, user } = this.props
    const { _handleDeleteClick } = this

    return (
      <React.Fragment>
      <Heading>Comments</Heading>
      {
        comments.isGetting ?
        <center>
          <Message
            content='Fetching comments for this happening...'
            header='Loading'
          />
        </center> :
        comments.items.length === 0 ?
        <center>
          <Message content='No comments here yet!' header='Empty' />
        </center> :
        comments.items.map((comment, key) => {
          const userIsOwner = comment.uid === user.uid

          return (
            <Message
              content={comment.description}
              header={comment.username}
              onDismiss={
                userIsOwner ?
                () => _handleDeleteClick(eid, comment.id) :
                null
              }
              key={key}
            />
          )
        })
      }
      </React.Fragment>
    )
  }
}

CommentsSection.propTypes = {
  comments: PropTypes.object.isRequired,
  eid: PropTypes.string.isRequired,
  _deleteComment: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  _deleteComment: (eid, cid) => dispatch(deleteComment(eid, cid))
})

export default connect(null, mapDispatchToProps)(CommentsSection)
