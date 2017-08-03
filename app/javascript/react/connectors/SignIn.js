import React from 'react'
import { connect } from 'react-redux'

import SignInFormContainer from '../forms/SignInFormContainer'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.item
  }
}

const SignIn = connect(
  mapStateToProps
)(SignInFormContainer)

export default SignIn
