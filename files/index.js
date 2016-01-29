import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import {kik:className} from './containers/{kik:slug}'
import createStore from './store'

const store = createStore()

render(
  <Provider store={store}>
    <{kik:className} />
  </Provider>,
  document.getElementById('{kik:slug}-root')
)
