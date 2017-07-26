import 'whatwg-fetch';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { BrowserRouter } from 'react-router-dom'
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';

import LandingPage from '../react/pages/LandingPage';

const store = createStore(
  combineReducers({
    form: formReducer,
    routing: routerReducer
  }),
  applyMiddleware(thunkMiddleware, routerMiddleware)
)

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('react-app');

  if (reactElement) {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter history={history}>
          <Route exactpath='/' component={LandingPage} />
        </BrowserRouter>
      </Provider>,
      reactElement
    )
  }
})
