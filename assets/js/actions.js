import { NEW_SESSION } from 'constants.js';
import { UPDATE_NEWSFEED } from 'constants.js';

export const mkSimpleAction = type => payload => ({ type, payload });
export const newSession = mkSimpleAction(NEW_SESSION);
export const updateNewsfeed = mkSimpleAction(UPDATE_NEWSFEED);
