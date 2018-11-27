import React from 'react';
import { connect } from 'react-redux';
import Petbook from 'components/Petbook';
import LoginPage from 'components/LoginPage';
import { loadUsers } from 'api';

const Root = (state) => {
  if (state.session) {
    loadUsers();
    return <Petbook />;
  }
  return <LoginPage />;
};

export default connect(({ session }) => ({ session }))(Root);
