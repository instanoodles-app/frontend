import React, { Component } from 'react';

import Navbar from '../components/Navbar';

import ApiRequest from '../util/ApiRequest';

import '../views/styles/profile.css';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <article className="_42elc _qfkcw">
          <header className="_5axto">
            <h1 className="_i572c">{this.state ? this.state.user.username : ''}</h1>
          </header>
        </article>
      </div>
    );
  }

  componentDidMount() {
    let params = location.pathname.split('/');
    let user = params[params.length - 1];
    console.log(user);
    if (user === 'me') {
      ApiRequest.me().then(me => {
        this.setState({
          user: me.data.data
        });
      });
    }
  }

  componentWillMount() {
    require('./styles/main.css');
  }
}

export default Profile;
