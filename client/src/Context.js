import React, { Component } from 'react';
import Cookies from 'js-cookie';
import Data from './Data';

// create context
const Context = React.createContext();

// provider component
export class Provider extends Component {
  state = {
    authenticatedUser: Cookies.getJSON('authenticatedUser') || null
  };

  constructor() {
    super();
    this.data = new Data();
  }

  render() {
    const { authenticatedUser } = this.state;

    const value = {
      authenticatedUser,
      data: this.data,
      actions: {
        signIn: this.signIn,
        signOut: this.signOut,
      },
    };

    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }

  signIn = async (username, password) => {
    const user = await this.data.getUser(username, password);
    console.log(`SIGN IN CALLED`);
    if (user !== null) {
      this.setState(() => ({
        authenticatedUser: user.user,
      }));
      Cookies.set('authenticatedUser', JSON.stringify(user), {
        expires: 1
      });
    }
    console.log(user);
    return user.user;
  };

  signOut = () => {
    this.setState({
      authenticatedUser: null,
    });
    Cookies.remove('authenticatedUser');
  };
}

export const { Consumer } = Context;

/**
 * A higher-order component that wraps the provided component in a Context Consumer component.
 * @param {class} Component - A React component.
 * @returns {function} A higher-order component.
 */

export default function withContext(Component) {
  return function ContextComponent(props) {
    return (
      <Context.Consumer>
        {context => <Component {...props} context={context} />}
      </Context.Consumer>
    );
  };
}
