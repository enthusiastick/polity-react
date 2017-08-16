import humps from 'humps'

import baseUrl from '../constants/baseUrl'

const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS'

export { FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS }

let fetchCurrentUser = () => {
  return {
    type: FETCH_CURRENT_USER
  }
}

let fetchCurrentUserSuccess = currentUser => {
  return {
    type: FETCH_CURRENT_USER_SUCCESS,
    currentUser
  }
}

let getCurrentUser = () => dispatch => {
  dispatch(fetchCurrentUser())
  return fetch(`${baseUrl}/api/v1/users/current.json`, {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => { return response.json() })
  .then(data => { dispatch(fetchCurrentUserSuccess(humps.camelizeKeys(data.user))) })
}

export {
  fetchCurrentUser,
  fetchCurrentUserSuccess,
  getCurrentUser
}
