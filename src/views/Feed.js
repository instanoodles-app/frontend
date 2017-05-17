import React, { Component } from 'react';
import './styles/feed.css';

import ApiRequest from '../util/ApiRequest';

class Feed extends Component {
  render() {
    if (!window.localStorage.getItem('token')) {
      window.location.pathname = '/login';
      return;
    }
    return (
      <h1>Hello {window.localStorage.getItem('token')}</h1>
    );
  }

  componentDidMount() {
    let parseResponse = data => {
      
    };

    ApiRequest.feed().then(response => {

    })
  }


}

export default Feed;
