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

    // Incredibly weak implementation 🤷
    ApiRequest.getPost(post).then(res => {
      ApiRequest.getLikesForPost(post).then(res1 => {
        ApiRequest.getCommentsForPost(post).then(res2 => {
          res.data.data.author = res.data.data.user.username;
          this.setState({
            post: (<PostElement post={res.data.data} likes={res1.data.data} comments={res2.data.data} />)
          });
        });
      });
    });
  }

  componentWillMount() {
    require('./styles/main.css');
  }
}

export default Profile;
