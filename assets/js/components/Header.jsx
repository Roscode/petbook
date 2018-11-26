import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-light navbar-expand border-bottom">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Newsfeed
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Activity
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              Find Friends
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
