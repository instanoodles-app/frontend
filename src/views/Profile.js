import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import ProfileHeader from '../components/ProfileHeader';
import ProfilePosts from '../components/ProfilePosts';

import ApiRequest from '../util/ApiRequest';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <article className="_42elc _qfkcw">
          <ProfileHeader user={this.state ? this.state.user : null} />
          <ProfilePosts user={this.state ? this.state.user : null} />
        </article>
      </div>
    );
  }

  componentDidMount() {
    let params = location.pathname.split('/');
    let user = params[params.length - 1];
    if (user === 'me') {
      ApiRequest.me().then(me => {
        this.setState({
          user: me.data.data
        });
      });
    } else {
      ApiRequest.getUser(user).then(res => {
        this.setState({
          user: res.data.data
        });
      });
    }
  }

  componentWillMount() {
    require('./styles/main.css');
    require('../views/styles/profile.css')
  }
}

export default Profile;
