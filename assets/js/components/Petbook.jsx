import React from 'react';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import Header from 'components/Header';
import AddPost from 'components/AddPost'
import * as a from 'actions';

export const Petbook = ({ signOut }) => (
  <div>
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <span className="navbar-brand">
Petbook
      </span>
      <form className="form-inline">
        <GoogleLogout
          render={({ onClick }) => (
            <button
              type="button"
              onClick={() => {
                onClick();
                signOut();
              }}
              className="btn btn-secondary"
            >
                Logout
            </button>)}
        />
      </form>
    </nav>
    <Header/>
    <AddPost/>
  </div>
);


export default connect(state => state, dispatch => ({
  signOut: () => {
    dispatch(a.newSession(null));
    dispatch(a.justCreated(null));
  },
}))(Petbook);
