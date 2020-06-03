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
                    errors={errors}
                    submit={ this.submit }
                    cancel={ this.cancel }
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

    change = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState(() => {
            return {
                [name]: value
            }
        });
        
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

        context.data.getUser(emailAddress, password)
            .then(user => {
                console.log(user)
                if(user === null) {
                    this.setState({
                        errors: [
                            {msg: 'Sign in unsuccessful'}
                        ]
                    })
                    console.log(this.state.errors)
                } else {
                    this.props.history.push('/authenticated')
                    console.log(`${emailAddress} signed in`)
                }
            })
            .catch(err => {
                console.log(err)
                this.props.history.push('/error')
            })
    }
    cancel = () => {
        this.props.history.push('/')
    }

}
