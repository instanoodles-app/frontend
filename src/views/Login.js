import React, { Component } from 'react';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

import ApiRequest from '../util/ApiRequest';

class Login extends Component {
  render() {
    if (window.localStorage.getItem('token')) {
      window.location.pathname = '/feed';
      return;
    }

    return (
      <div className="container">
        <div className="logo">
          <img width="200px" src="/img/logo.png" />
        </div>
        {(this.state && this.state.selection) ? this.state.selection : this.selectionForm()}
      </div>
    );
  }

  componentWillMount() {
    require('./styles/login.css');
  }

  onSelection(s) {
    this.setState({ selection: s ? <SignUpForm /> :  (<LoginForm />)});
  }

  selectionForm() {
    return (
      <div className="box">
        <h1 className="title is-3">Welcome!</h1>
        <div className="selection">
          <button className="button" onClick={() => this.onSelection(0)}>Log In</button>
          <button className="button is-info" onClick={() => this.onSelection(1)}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Login;
