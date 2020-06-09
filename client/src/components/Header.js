import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Nprogress from 'nprogress';
// import Router from 'next/router';

// progress loading bar
Nprogress.start();
Nprogress.done();

const Header = props => (
  <div className="header">
    <div className="bounds">
      <Link to="/">
        <h1 className="header--logo">Course Library</h1>
      </Link>

      <nav>
        {props.context.authenticatedUser ? (
          <Fragment>
            <span>Welcome {props.context.authenticatedUser.firstName} !</span>
            <Link className="signout" to="/signout">
              Sign Out
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <span>Welcome, </span>
            <Link className="signup" to="/signup">
              Sign up
            </Link>
            <Link className="signin" to="/signin">
              Sign in
            </Link>
          </Fragment>
        )}
      </nav>
    </div>
  </div>
);

export default Header;
