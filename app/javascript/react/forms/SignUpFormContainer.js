import React from 'react'
import { reduxForm } from 'redux-form'

import SignUpForm from '../containers/SignUpForm'

let validate = fields => {
  const errors = {}

  return errors
}

let onSubmit = (values) => {
  console.log(values)
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
