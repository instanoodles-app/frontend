import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import PostElement from '../components/PostElement';

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
        <section className="_jx516">
          {this.state ? this.state.posts : null}
        </section>
      </div>
    );
  }

  componentDidMount() {
    let parseResponse = data => {

    };

    ApiRequest.feed().then(response => {
      var arr = [];
      if (response.data.code === 200) {
        let posts = response.data.data;
        for (let post of posts) {
          arr.push((<PostElement post={post} />));
        }
      }
      this.setState({
        posts: arr
      });
    });

    ApiRequest.me().then(response => {
      this.setState({
        displayName: response.data.data.displayName
      })
    });
  }

  componentWillMount() {
    require('./styles/main.css');
  }
}

export default Feed;
