import { logger } from 'logger';

export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    logger.log('state retrieved:', serializedState);
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
    logger.log('state saved:', state);
  } catch (err) {
    logger.error(err);
  }
};
