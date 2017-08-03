import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import createBrowserHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

import LandingPage from '../react/connectors/LandingPage'
import NavigationBar from '../react/connectors/NavigationBar'
import Notices from '../react/connectors/Notices'
import SignIn from '../react/connectors/SignIn'

import currentUser from '../react/reducers/currentUser'
import notices from '../react/reducers/notices'

const history = createBrowserHistory()

const middlewares = [thunkMiddleware, routerMiddleware(history)]

const store = createStore(
  combineReducers({
    currentUser,
    notices,
    form: formReducer,
    router: routerReducer
  }),
  applyMiddleware(...middlewares)
)

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-app')

  if (reactElement) {
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <Route path='/' component={NavigationBar} />
            <Route path='/' component={Notices} />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/sign-in' component={SignIn} />
          </div>
        </ConnectedRouter>
      </Provider>,
      reactElement
    )
  }
})
