import React, { Component } from 'react';

import ApiRequest from '../util/ApiRequest';

class ProfilePosts extends Component {
  render() {
    return (
      <div>
        <div className="_nljxa">
          <div className="_myci9">
            {this.state ? this.state.posts : null}
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    ApiRequest.getUserPosts(this.props.userId).then(res => {
      if (res.status === 200) { 
        let i = 3;
        let posts = [];
        for (let post of res.data.data) {
            posts.push((
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