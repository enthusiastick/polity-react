import { FETCH_CREATE_SESSION, FETCH_CREATE_SESSION_SUCCESS } from '../actions/createSession'

const initialState = {
  currentUser: { id: null },
  isFetching: false
}

let session = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREATE_SESSION:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_CREATE_SESSION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        currentUser: action.currentUser
      })
    default:
      return state
  }
}

export default session
