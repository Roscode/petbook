import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { GoogleLogout } from 'react-google-login';
import * as a from 'actions';

function Header({ signOut }) {
  return (
    <nav className="navbar navbar-expand navbar-light">
      <Link to="/">
        <span className="navbar-brand">Petbook</span>
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/newsfeed">
            Newsfeed
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/friends">
            Find Friends
          </Link>
        </li>
      </ul>
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
          </button>
        )}
      />
    </nav>
  );
}

export default connect(
  state => state,
  dispatch => ({
    signOut: () => {
      dispatch(a.newSession(null));
    },
  }),
)(Header);
