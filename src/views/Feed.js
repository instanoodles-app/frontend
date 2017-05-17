import React, { Component } from 'react';

import Navbar from '../components/Navbar';

import ApiRequest from '../util/ApiRequest';

class Feed extends Component {
  render() {
    if (!window.localStorage.getItem('token')) {
      window.location.pathname = '/login';
      return;
    }

    return (
      <div>
        <Navbar />
        <h1>Hello {this.state ? this.state.displayName : ''}</h1>
      </div>
    );
  }

  componentDidMount() {
    let parseResponse = data => {

    };

    ApiRequest.feed().then(response => {

    });

    ApiRequest.me().then(response => {
      this.setState({
        displayName: response.data.data.displayName
      })
    });
  }

  componentWillMount() {
    require('./styles/feed.css');
  }
}

export default Feed;
