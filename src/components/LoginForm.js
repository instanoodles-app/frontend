import React, { Component } from 'react';

import ApiRequest from '../util/ApiRequest';

class LoginForm extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title is-3">Login</h1>
        <p>Please log in</p>
        <br />
        {(this.state && this.state.error) ? this.state.error : (<p />)}
        <br />
        <form action="" onSubmit={e => this.doLogin(e)}>
          <h1 className="title is-5">Username</h1>
          <input className="input" type="text" name="username" value={this.state ? this.state.username : ''} onChange={e => this.usernameChanged(e)} />
          <h1 className="title is-5">Password</h1>
          <input className="input" type="password" name="password" value={this.state ? this.state.password : ''} onChange={e => this.passwordChanged(e)} />
          <br />
          <br />
          <input className="button is-success" type="submit" value="Log in" />
        </form>
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
          this.setState({ error: (<div className="notification is-danger">Invalid username or password</div>) });
        }
      }
      console.log(e);
    });
  }
}

export default LoginForm;