import React from 'react'
import { Link } from 'react-router-dom'

const RightNavigation = props => {
  let link

  if (props.currentUser.id) {
    link = <li className='sign-out'><a data-method='delete' href='/sign-out'>Sign Out</a></li>
  } else {
    link = <li className='sign-in'><Link to='/sign-in'>Sign In</Link></li>
  }

  return(
     <div className='top-bar-right'>
      <ul className='menu'>
        {link}
      </ul>
    </div>
  )
}

export default RightNavigation
