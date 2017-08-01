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
import SignIn from '../react/connectors/SignIn'

import currentUser from '../react/reducers/currentUser'

const history = createBrowserHistory()

const middlewares = [thunkMiddleware, routerMiddleware(history)]

const store = createStore(
  combineReducers({
    currentUser,
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
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/sign-in' component={SignIn} />
          </div>
        </ConnectedRouter>
      </Provider>,
      reactElement
    )
  }
})
