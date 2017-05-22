import React, { Component } from 'react';

import ApiRequest from '../util/ApiRequest';


class LoginForm extends Component {
  render() {
    return (
      <div className="box">
        <h1 className="title is-3">Sign up</h1>
        <br />
        {(this.state && this.state.error) ? this.state.error : (<p />)}
        <br />
        <form action="" onSubmit={e => this.doRegistration(e)}>
          <h1 className="title is-5">Email</h1>
          <input className="input" type="email" value={this.state ? this.state.user.email : ''} onChange={e => this.valuesChanged('email', e)} required />
          <br />
          <h1 className="title is-5">Username</h1>
          <input className="input" type="text" value={this.state ? this.state.user.username : ''} onChange={e => this.valuesChanged('username', e)} required />
          <br />
          <h1 className="title is-5">Display name</h1>
          <input className="input" type="text" value={this.state ? this.state.user.displayName : ''} onChange={e => this.valuesChanged('displayName', e)} />
          <br />
          <h1 className="title is-5">Bio</h1>
          <textarea className="textarea" value={this.state ? this.state.user.bioDescription : ''} onChange={e => this.valuesChanged('bioDescription', e)} />
          <br />
          <h1 className="title is-5">Password</h1>
          <input className="input" type="password" value={this.state ? this.state.user.password : ''} onChange={e => this.valuesChanged('password', e)} required />
          <br />
          <br />
          <input className="button is-success" type="submit" value="Sign up" />
        </form>
      </div>
    );
  }

  valuesChanged(key, e) {
    let user = this.state ? this.state.user : {};
    user[key] = e.target.value;
    this.setState({
      user
    });
  }

  doRegistration(e) {
    e.preventDefault();
    ApiRequest.createUser(this.state.user).then(result => {
      if (result.data.code === 200) {
        let token = result.data.data.value;
        window.localStorage.setItem('token', token);
        ApiRequest.me().then(res => {
          window.localStorage.setItem('username', res.data.data.username);
          window.location.pathname = '/feed';
        });        
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