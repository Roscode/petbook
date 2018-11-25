import { combineReducers } from 'redux';
import * as c from './constants';

const replacer = (actionType, initialValue) => (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionType:
      return payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  session: replacer(c.NEW_SESSION, null), 
  posts: replacer(c.UPDATE_NEWSFEED, null),
});

export default rootReducer;
