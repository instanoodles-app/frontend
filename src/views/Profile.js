import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import ProfileHeader from '../components/ProfileHeader';

import ApiRequest from '../util/ApiRequest';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <article className="_42elc _qfkcw">
          <ProfileHeader />
        </article>
      </div>
    );
  }

  componentDidMount() {

  }

  componentWillMount() {
    require('./styles/main.css');
    require('../views/styles/profile.css')
  }
}

export default Profile;
