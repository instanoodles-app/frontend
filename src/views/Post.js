import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import PostElement from '../components/PostElement';

import ApiRequest from '../util/ApiRequest';

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <section className="_jx516">
          {this.state ? this.state.post : ''}
        </section>
      </div>
    );
  }

  componentDidMount() {
    let params = location.pathname.split('/');
    let post = params[params.length - 1];

    ApiRequest.getPost(post).then(res => {
      if (res.status === 200) {
        res.data.data.author = res.data.data.user.username;
        this.setState({
          post: (<PostElement post={res.data.data} />)
        });
      }
    });
  }

  componentWillMount() {
    require('./styles/main.css');
  }
}

export default Profile;
