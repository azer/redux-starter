import { INCR } from '../actions';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  example
});

export default rootReducer;

function example (state = 0, action) {
  switch (action.type) {
  case INCR:
    return state + 1;
  default:
    return state;
  }
}
