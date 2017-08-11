import React, { Component } from 'react'
import { Field } from 'redux-form'

import { flashNotice } from '../actions/flashNotice'

import TextInput from '../components/formFields/TextInput'

class RequestPasswordResetForm extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.currentUser.id) {
      this.props.dispatch(push('/'))
      this.props.dispatch(flashNotice({ alert: 'You are already signed in.' }))
    }
  }

  render() {
    return(
      <div className='row'>
        <div className='small-12 columns'>
        <h1 className='text-center top-padded'>Forgot Password</h1>
        <form onSubmit={this.props.handleSubmit}>
          <div className='form-inputs'>
            <Field name='email' label='Email' component={TextInput} />
          </div>
          <div className='form-actions'>
            <button className='button' disabled={this.props.submitting} type='submit'>Reset Password</button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

export default RequestPasswordResetForm
