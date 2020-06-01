import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component {
    state = {
        username: '',
        password: '',
        errors: []
    }
    render() {
        const {
            username,
            password,
            errors,
          } = this.state;
        return (
            <Fragment>
                <div>
                <Form 
                    submitButtonText="Sign In"
                     elements={() => (
                        <Fragment>
                          <input 
                            id="username" 
                            name="username" 
                            type="text"
                            value={ username } 
                            onChange={ this.change } 
                            placeholder="User Name" />
                          <input 
                            id="password" 
                            name="password"
                            type="password"
                            value={ password } 
                            onChange={ this.change } 
                            placeholder="Password" />                
                        </Fragment>
                      )} />
            </div>
            <p>&nbsp;</p>
            <p>Dont have a user account? <Link to="/signup">Click here</Link> to sign up</p>
            </Fragment>
            
        )
    }
}
