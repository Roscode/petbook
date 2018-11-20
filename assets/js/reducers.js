import { combineReducers } from 'redux';
import * as c from './constants';

const replacer = (actionType, initialValue) =>
    (state = initialValue, {type, payload}) => {
        switch (type) {
            case actionType:
                return payload;
            default:
                return state;
        }
    }


const rootReducer = combineReducers({
    example: replacer(c.EXAMPLE_CONSTANT, 0)
});

export default rootReducer;
