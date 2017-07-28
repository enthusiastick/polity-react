import React from 'react'

const LeftNavigation = props => {
  let link, text

  if (props.currentUser.id) {
    link = <li><a href=''>{props.currentUser.handle}</a></li>
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
