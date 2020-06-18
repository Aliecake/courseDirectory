import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import Nprogress from 'nprogress';
// import Router from 'next/router';

// progress loading bar
Nprogress.start();
Nprogress.done();

//get user from cookies, so works on refreshes
let user;

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
        {/* For some reason, user comes back true sometimes when signing out ?? */}
        {(props.context.authenticatedUser && props.context.authenticatedUser.firstName) || user ? (
          
          <Fragment>
            
            <span>Welcome {(props.context.authenticatedUser.firstName)} !</span>
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
