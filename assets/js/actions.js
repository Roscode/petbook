import { NEW_SESSION } from 'constants.js';

export const mkSimpleAction = type => payload => ({ type, payload });
export const newSession = mkSimpleAction(NEW_SESSION);
