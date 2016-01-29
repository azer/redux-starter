import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'
import thunk from 'redux-thunk'

const createAsyncStore = applyMiddleware(thunk)(createStore)

export default function configureStore () {
  return createAsyncStore(reducers)
}
