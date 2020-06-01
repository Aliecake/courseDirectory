import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

export default class UserSignIn extends Component {
    state = {
        emailAddress: '',
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
                            id="emailAddress" 
                            name="emailAddress" 
                            type="text"
                            onChange={ this.change } 
                            placeholder="Email Address" />
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
    submit = () => {
        const { context } = this.props;
        const {
            emailAddress,
            password
        } = this.state

        //user payload
        const user = {
            emailAddress,
            password
        }

        
    }

}
