import { reset } from 'redux-form'

const FETCH_CREATE_SESSION = 'FETCH_CREATE_SESSION'
const FETCH_CREATE_SESSION_SUCCESS = 'FETCH_CREATE_SESSION_SUCCESS'

export { FETCH_CREATE_SESSION, FETCH_CREATE_SESSION_SUCCESS }

let fetchCreateSession = () => {
  return {
    type: FETCH_CREATE_SESSION
  }
}

let fetchCreateSessionSuccess = currentUser => {
  type: FETCH_CREATE_SESSION_SUCCESS,
  currentUser
}

let createSession = values => dispatch => {
  dispatch(fetchCreateSession())
  let payload = JSON.stringify(values)
  return fetch('api/v1/sessions.json', {
    credentials: 'same-origin',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload
  })
  .then(response => { return response.json() })
  .then(data => {
    dispatch(reset('createSession'))
    dispatch(fetchCreateSessionSuccess(data.user))
  })
}

export {
  fetchCreateSession,
  fetchCreateSessionSuccess,
  createSession
}
