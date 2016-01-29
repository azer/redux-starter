import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import { syncHistory, routeReducer } from 'redux-simple-router'
import { browserHistory } from 'react-router'

const reduxRouterMiddleware = syncHistory(browserHistory)
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore)

export default function configureStore () {
  return createStoreWithMiddleware()
}
