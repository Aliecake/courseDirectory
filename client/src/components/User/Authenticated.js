import React, { Fragment } from 'react';

export default ({ context  }) => {
  const authUser = context.authenticatedUser;
  return (
  <div className="bounds">
    <div className="grid-100">
        {authUser? 
            <Fragment>
                 <h1> {authUser.firstName} is authenticated!</h1>
                <p>Your username is {authUser.emailAddress}.</p>
            </Fragment> :
            <Fragment>
                You are not logged in, sign in or sign up
            </Fragment>
        }
    </div>
  </div>
  );
}