import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Form } from 'semantic-ui-react'

class CommentForm extends Component {
  constructor(props) {
    super(props)

    this._handleCommentClick = this._handleCommentClick.bind(this)
  }

  _handleCommentClick = () => console.log('ATTEMPTED COMMENT')

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
            name='comment'
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

CommentForm = reduxForm({ form: 'comment' })(CommentForm)

export default connect(null, null)(CommentForm)
