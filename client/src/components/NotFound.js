import React, { Fragment } from 'react';


const NotFound = props => {
    return (
         props.noCourse? 
            <Fragment>
                <h1>That course doesn't exist</h1>
                <a href="/">Go Home</a>
            </Fragment> : 
            <Fragment>
                <h1>404 Page Not Found</h1>
                <a href="/">Go Home</a>
            </Fragment>
    )
}

export default NotFound;