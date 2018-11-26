import React from 'react';
import { connect } from 'react-redux';
import Petbook from 'components/Petbook';
import LoginPage from 'components/LoginPage';
import Profile from 'components/Profile';

const Root = (state) => {
  
  if (state.session && !state.justCreated) {
    return <Petbook />;
  } else if (state.justCreated) {
    return <Profile />;
  } else {
    return <LoginPage />;
  }
};

export default connect(
  ({ session, justCreated }) => ({ session, justCreated }),
)(Root);
