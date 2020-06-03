import React, { Fragment } from 'react';


const NotFound = props => {
    return (
         props.noCourse? 
            <Fragment>
                <h1>That course doesn't exist</h1>
                <a href="/">Go Home</a>
            </Fragment> : 
            <Fragment>
                <h1>Sorry! We couldn't find what you're looking for!</h1>
                <a href="/">Go Home</a>
            </Fragment>
    )
}

export default NotFound;