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
          <input className="input" type="email" placeholder="asd@asd.com" value={this.state ? this.state.user.email : ''} onChange={e => this.valuesChanged('email', e)} required />
          <br />
          <h1 className="title is-5">Username</h1>
          <input className="input" type="text" placeholder="randomdude420" value={this.state ? this.state.user.username : ''} onChange={e => this.valuesChanged('username', e)} required />
          <br />
          <h1 className="title is-5">Display name</h1>
          <input className="input" type="text" placeholder="Random Dude 😂" value={this.state ? this.state.user.displayName : ''} onChange={e => this.valuesChanged('displayName', e)} />
          <br />
          <h1 className="title is-5">Bio</h1>
          <textarea className="textarea" placeholder="Hello! I'm just a random dude blah blah blah..." value={this.state ? this.state.user.bioDescription : ''} onChange={e => this.valuesChanged('bioDescription', e)} />
          <br />
          <h1 className="title is-5">Password</h1>
          <input className="input" type="password" placeholder="*****" value={this.state ? this.state.user.password : ''} onChange={e => this.valuesChanged('password', e)} required />
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
    if (this.state.user.email) {
      if (!/\S+@\S+\.\S+/.test(this.state.user.email)) {
        this.flashError('Wrong email format');
        return;
      }
    } else {
      this.flashError('No email');
      return;
    }

    if (this.state.user.username) {
      if (this.state.user.username.length < 4 || this.state.user.username.length > 32) {
        this.flashError('Username must be between 4 and 32 characters long');
        return;
      }
    } else {
      this.flashError('No username entered');
      return;
    }


    if (this.state.user.displayName) {
      if (this.state.user.displayName.length > 64) {
        this.flashError('Display name must be 64 or less characters');
        return;
      }
    } else {
      this.flashError('No display name entered');
      return;
    }

    if (this.state.user.bioDescription) {
      if (this.state.user.bioDescription.length > 255) {
        this.flashError('Bio must be 255 or less characters');
        return;
      }
    } else {
      this.flashError('No bio entered');
      return;
    }

    if (this.state.user.password) {
      if (this.state.user.password.length < 8 || this.state.user.password.length > 255) {
        this.flashError('Password must be between 8 and 255 characters');
        return;
      }
    } else {
      this.flashError('No password entered');
      return;
    }

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
        if (e.response.data.code === 403) {
          this.setState({ error: (<div className="notification is-danger">Username already taken!</div>) });
        }
      }
      console.log(e);
    });
  }

  flashError(err) {
    this.setState({ error: (<div className="notification is-danger">{err}</div>) });
  }
}

export default LoginForm;