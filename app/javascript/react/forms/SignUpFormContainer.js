import React from 'react'
import { reduxForm } from 'redux-form'
import { push } from 'react-router-redux'

import SignUpForm from '../containers/SignUpForm'

import { clearNotices, flashNotice } from '../actions/flashNotice'
import { createUser } from '../actions/createUser'

let validate = fields => {
  const errors = {}

  return errors
}

let onSubmit = (values, dispatch) => {
  return dispatch(createUser(values))
  .then(data => {
    dispatch(clearNotices())
    dispatch(flashNotice({ success: 'Registration successful. Please confirm your email to activate your account.' }))
    dispatch(push('/'))
  })
  .catch(error => {
    dispatch(clearNotices())
    dispatch(flashNotice({ alert: 'There was a problem with your registration.' }))
  })
}

const SignUpFormContainer = props => {
  const ConnectedSignUpForm = reduxForm({
    form: 'signUp',
    validate,
    onSubmit
  })(SignUpForm)

  return(
    <ConnectedSignUpForm currentUser={props.currentUser} />
  )
}

export default SignUpFormContainer
