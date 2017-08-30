import React from 'react'
import { Link } from 'react-router-dom'

const LeftNavigation = props => {
  let link, text

  if (props.currentUser.id) {
    link = <li><Link to='edit-user'>{props.currentUser.handle}</Link></li>
    text = 'Signed in as:'
  } else {
    text = 'Not signed in.'
  }

  return(
    <div className='top-bar-left'>
      <ul className='menu'>
        <li className='menu-text'>{text}</li>
        {link}
      </ul>
    </div>
  )
}

export default LeftNavigation
