import React from 'react';
import { connect } from 'react-redux';
import PetBook from 'components/PetBook';
import LoginPage from 'components/LoginPage';

const Root = (state) => {
  if (state.session) {
    return <PetBook />;
  }
  return <LoginPage />;
};

export default connect(
  ({ session }) => ({ session }),
)(Root);
