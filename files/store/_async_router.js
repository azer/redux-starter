import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { syncHistory, routeReducer } from 'redux-simple-router';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(thunk, reduxRouterMiddleware)(createStore);

export default function configureStore () {
  return createStoreWithMiddleware();
}
