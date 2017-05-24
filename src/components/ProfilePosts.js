import React, { Component } from 'react';

import ApiRequest from '../util/ApiRequest';

class ProfilePosts extends Component {
  render() {
    return (
      <div>
        <div className="_nljxa">
          {this.state ? this.state.posts : null}
        </div>
      </div>
    );
  }

  componentDidMount() {
    let params = location.pathname.split('/');
    let user = params[params.length - 1];
    ApiRequest.getUserPosts(user).then(res => {
      if (res.status === 200) {
        let i = 0;
        let posts = [];
        while (i < res.data.data.length) {
          let start = i;
          let tmpItems = [];
          while (i < (start+3)) {
            let post = res.data.data[i];
            if (!post) break;
            tmpItems.push((
              <a className="_8mlbc _vbtk2 _t5r8b" href={`/post/${post.id}`}>
                <div className="_22yr2">
                  <div className="_jjzlb">
                    <img className="_icyx7" src={post.imageUrl} />
                  </div>
                </div>
              </a>
            ));
            i++;
          }
          posts.push((
            <div className="_myci9">
              {tmpItems}
            </div>
          ));
        }
        this.setState({
          posts
        });
      }
    })
  }

  componentWillMount() {
    require('../views/styles/profileposts.css');
  }
}

export default ProfilePosts;