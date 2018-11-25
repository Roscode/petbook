import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';

function Header() {
  return (
  // if this is the current user's profile
    <nav className="navbar navbar-light navbar-expand border-bottom">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#!">Newsfeed</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Activity</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">Find Friends</a>
          </li>
          <div>
          </div>
        </ul>
      </div>
    </nav>

  // else include Add Friend Button
  );
}

export default Header;