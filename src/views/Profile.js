import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import ProfileHeader from '../components/ProfileHeader';

import ApiRequest from '../util/ApiRequest';

import '../views/styles/profile.css';

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
  }
}

export default Profile;
