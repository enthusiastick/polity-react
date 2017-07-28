import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

import LandingPage from '../react/connectors/LandingPage'
import NavigationBar from '../react/connectors/NavigationBar'

import currentUser from '../react/reducers/currentUser'

const browserHistory = createBrowserHistory()

const store = createStore(
  combineReducers({
    currentUser,
    form: formReducer,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware, routerMiddleware(browserHistory))
)

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-app')

  if (reactElement) {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <div>
            <Route path='/' component={NavigationBar} />
            <Route exact path='/' component={LandingPage} />
          </div>
        </BrowserRouter>
      </Provider>,
      reactElement
    )
  }
})
