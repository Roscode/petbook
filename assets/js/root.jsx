import React from 'react';
import { connect } from 'react-redux';
import Petbook from 'components/Petbook';
import LoginPage from 'components/LoginPage';

const Root = (state) => {
  console.log(state);
  if (state.session) {
    return <Petbook />;
  }
  return <LoginPage />;
};

export default connect(({ session }) => ({ session }))(Root);
