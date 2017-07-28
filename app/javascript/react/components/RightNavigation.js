import React from 'react';

const RightNavigation = props => {
  let link

  if (props.currentUser.id) {
    link = <li className='sign-out'><a data-method='delete' href='/sign-out'>Sign Out</a></li>
  } else {
    link = <li className='sign-in'><a href='/sign-in'>Sign In</a></li>
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
