import React, { Component } from 'react';

import ApiRequest from '../util/ApiRequest';

class ProfileHeaders extends Component {
  render() {
    return (

    );
  }

  componentDidMount() {
    let params = location.pathname.split('/');
    let user = params[params.length - 1];
    if (user === 'me') {
      ApiRequest.me().then(me => {
        
      });
    } else {
      ApiRequest.getUser(user).then(usr => {
        
      })
    }
  }
}