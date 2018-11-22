import React from 'react';
import { connect } from 'react-redux';
import PetBook from 'components/PetBook';
import LoginPage from 'components/LoginPage';

const Root = ({ session }) => {
  if (session) {
    return <PetBook />;
  }
  return <LoginPage />;
};

export default connect()(Root);
