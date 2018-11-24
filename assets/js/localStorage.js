export const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    console.log('state retrieved');
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    window.localStorage.setItem('state', serializedState);
    console.log('state saved');
  } catch (err) {
    console.log(err); // eslint-disable-line no-console
  }
};
