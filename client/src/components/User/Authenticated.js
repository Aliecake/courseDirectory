import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

export default ({ context }) => {
  const authUser = context.authenticatedUser;
  return (
    <div className="bounds">
      <div className="grid-100">
        {authUser ? (
          <Fragment>
            <h1> {authUser.firstName} is authenticated!</h1>
            <p>Your username is {authUser.emailAddress}.</p>
          </Fragment>
        ) : (
          <Redirect to="/signin" />
        )}
      </div>
    </div>
  );
};
