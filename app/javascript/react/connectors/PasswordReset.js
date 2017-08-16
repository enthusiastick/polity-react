import queryString from 'query-string'
import React from 'react'
import { connect } from 'react-redux'

import PasswordResetFormContainer from '../forms/PasswordResetFormContainer'

const mapStateToProps = (state, ownProps) => {
  return Object.assign(
    {},
    queryString.parse(state.router.location.search),
    {
      currentUser: state.currentUser.item,
      passwordResetId: ownProps.match.params.passwordResetId
    }
  )
}

const PasswordReset = connect(
  mapStateToProps
)(PasswordResetFormContainer)

export default PasswordReset
