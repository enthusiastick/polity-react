import React from 'react'
import { change, reduxForm, reset } from 'redux-form'
import { push } from 'react-router-redux'

import SignInForm from '../components/SignInForm'

import { clearNotices, flashNotice } from '../actions/flashNotice'
import { createSession } from '../actions/createSession'

let validate = fields => {
  const errors = {}

  return errors
}

let onSubmit = (values, dispatch) => {
  return dispatch(createSession(values))
  .then(data => {
    dispatch(clearNotices())
    dispatch(flashNotice({ success: `Signed in as ${data.user.handle}.` }))
    dispatch(push('/'))
  })
  .catch(error => {
    dispatch(reset('signIn'))
    dispatch(clearNotices())
    dispatch(flashNotice({ alert: error.errors._error }))
  })
}

const SignInFormContainer = props => {
  const switchHandler = value => {
    props.dispatch(change('signIn', 'rememberMe', value))
  }

  const ConnectedSignInForm = reduxForm({
    form: 'signIn',
    validate,
    onSubmit
  })(SignInForm)

  return(
    <ConnectedSignInForm switchHandler={switchHandler} />
  )
}

export default SignInFormContainer
