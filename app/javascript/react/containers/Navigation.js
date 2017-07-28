import React, { Component } from 'react'

import LeftNavigation from '../components/LeftNavigation'
import RightNavigation from '../components/RightNavigation'

class Navigation extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getCurrentUser()
  }

  render() {
    return(
      <div className='top-bar'>
        <LeftNavigation currentUser={this.props.currentUser} />
        <RightNavigation currentUser={this.props.currentUser} />
      </div>
    )
  }
}

export default Navigation
