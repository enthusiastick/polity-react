import React from 'react'
import { connect } from 'react-redux'

import Welcome from '../components/Welcome'

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser.currentUser
  }
}

const LandingPage = connect(
  mapStateToProps
)(Welcome)

export default LandingPage
