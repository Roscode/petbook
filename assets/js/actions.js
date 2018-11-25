import { NEW_SESSION } from 'constants.js';
import { POST_LIST } from 'constants.js';

export const mkSimpleAction = type => payload => ({ type, payload });
export const newSession = mkSimpleAction(NEW_SESSION);
export const postList = mkSimpleAction(POST_LIST);
