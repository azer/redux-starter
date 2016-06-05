import { render } from 'react-dom'
import React from 'react'
import { Provider } from 'react-redux'
import {hek:className} from './containers/{hek:slug}'
import createStore from './store'

const store = createStore()

render(
  <Provider store={store}>
    <{hek:className} />
  </Provider>,
  document.getElementById('{hek:slug}-root')
)
