import { combineReducers } from 'redux';
import * as c from 'constants.js';
import _ from 'lodash';

const replacer = (actionType, initialValue) => (state = initialValue, { type, payload }) => {
  switch (type) {
    case actionType:
      return payload;
    default:
      return state;
  }
};

const userIds = (state = [], { type, payload }) => {
  switch (type) {
    case c.USER_LIST:
      return _.map(payload, 'id');
    default:
      return state;
  }
};

const users = (state = {}, { type, payload }) => {
  switch (type) {
    case c.USER_LIST:
      return _.keyBy(payload, 'id');
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  session: replacer(c.NEW_SESSION, null),
  posts: replacer(c.POST_LIST, []),
  users,
  userIds,
});

export default rootReducer;
