import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Nprogress from 'nprogress';
// import Router from 'next/router';

// progress loading bar
Nprogress.start();
Nprogress.done();

//get user from cookies, so works on refreshes
let user = null;

if (Cookies.get('authenticatedUser')) {
  user = JSON.parse(Cookies.get('authenticatedUser'))
}

const Header = props => (

  <div className="header">
    <div className="bounds">
      <Link to="/">
        <h1 className="header--logo">Course Library</h1>
      </Link>

      <nav>
        {/* if user is in context, or cookies, display */}
        {/* used cookies user name since context seems to be lost on refresh*/}
        {/* sometimes after signing out, this fires true when false? */}
        {props.context.authenticatedUser ? (
          
          <Fragment>
            
            <span>Welcome { props.context.authenticatedUser.firstName || user.user.firstName } !</span>
            <Link className="addCourse" to="/create-course">Add Course</Link>
            <Link className="signout" to="/signout">
              Sign Out
            </Link>
          </Fragment>
        ) : (
          <Fragment>
            <span>Welcome, Guest</span>
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
