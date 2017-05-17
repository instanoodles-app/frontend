import React, { Component } from 'react';
import './styles/login.css';

import ApiRequest from '../util/ApiRequest';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="logo">
          <img width="200px" src="/img/logo.png" />
        </div>
        {this.state ? this.state.selection(this) : this.selectionForm()}
      </div>
    );
  }

  usernameChanged(e) {
    console.log(e.target.value);
    this.setState({
      username: e.target.value
    });
  }

  passwordChanged(e) {
    this.setState({
      password: e.target.value
    });
    console.log(this.state.username);
  }

  doLogin(e) {
    e.preventDefault();
    ApiRequest.login(this.state.username, this.state.password).then(result => {
      if (result.data.code === 200) {
        let token = result.data.data.token;
        window.localStorage.setItem('token', token);
        // Redirect to /feed
        window.location.pathname = '/feed';
      }
    }).catch(e => {
      if (e.response) {
        if (e.response.data.code === 404) {
          this.setState({error: (<div className="notification is-danger">Invalid username or password</div>)});
        } 
      }
      console.log(e);
    });
  }

  onSelection(s) {
    this.setState({ selection: s ? null : this.loginForm });
  }

  loginForm(self) {
    return (
      <div className="box">
        <h1 className="title is-3">Login</h1>
        <p>Please log in</p>
        <br />
        {(self.state && self.state.error) ? self.state.error : (<p />)}
        <br />
        <form action="" onSubmit={e => self.doLogin(e)}>
          <h1 className="title is-5">Username</h1>
          <input className="input" type="text" name="username" value={self.state ? self.state.username : ''} onChange={e => self.usernameChanged(e)} />
          <h1 className="title is-5">Password</h1>
          <input className="input" type="password" name="password" value={self.state ? self.state.password : ''} onChange={e => self.passwordChanged(e)} />
          <br />
          <br />
          <input className="button is-success" type="submit" value="Log in" />
        </form>
      </div>
    );
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
