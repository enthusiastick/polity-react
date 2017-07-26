import React from 'react'
import ReactDOM from 'react-dom'

import LandingPage from '../react/pages/LandingPage';

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-app');

  if (reactElement) {
    ReactDOM.render(
      <LandingPage />,
      reactElement
    )
  }
})
