import { combineReducers } from 'redux';
import * as c from 'constants.js';

const replacer = (actionType, initialValue) => (state = initialValue, { type, payload }) => {
  console.log(actionType, initialValue)
  switch (type) {
    case actionType:
      return payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  session: replacer(c.NEW_SESSION, null),
  posts: replacer(c.POST_LIST, []),
});

export default rootReducer;
