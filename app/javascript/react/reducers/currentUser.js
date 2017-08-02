import { FETCH_CURRENT_USER, FETCH_CURRENT_USER_SUCCESS } from '../actions/getCurrentUser'
import { FETCH_CREATE_SESSION_SUCCESS } from '../actions/createSession'

const initialState = {
  currentUser: { id: null },
  isFetching: false
}

let currentUser = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCH_CURRENT_USER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        currentUser: action.currentUser
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

export default currentUser
