import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

import { postCommentIfValid } from '../actions/commentPostActions'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this._handleCommentClick = this._handleCommentClick.bind(this)
  }

  _handleCommentClick(comment) {
    const { eid, _postCommentIfValid, _user } = this.props

    _postCommentIfValid(comment, eid, _user)
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    const disable = pristine || submitting
    const { _handleCommentClick } = this

    return (
      <Form onSubmit={handleSubmit(_handleCommentClick)}>
        <Form.Group>
          <Form.TextArea
            component='textarea'
            control={Field}
            label='Comment'
            name='description'
            placeholder='Say something about this happening!'
            type='text'
            width={16}
          />
        </Form.Group>
        <Form.Group>
          <Form.Button disabled={disable} type='submit'>Comment</Form.Button>
          <Form.Button disabled={disable} onClick={reset} type='button'>
            Reset
          </Form.Button>
        </Form.Group>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  _error: state.comments.error,
  _user: state.user
})

const mapDispatchToProps = dispatch => ({
  _postCommentIfValid: (comment, eid, user) => {
    dispatch(postCommentIfValid(comment, eid, user))
  }
})

CommentForm.propTypes = {
  eid: PropTypes.string.isRequired,
  _error: PropTypes.string,
  _postCommentIfValid: PropTypes.func.isRequired,
  _user: PropTypes.object.isRequired
}

CommentForm = reduxForm({ form: 'comment' })(CommentForm)

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
