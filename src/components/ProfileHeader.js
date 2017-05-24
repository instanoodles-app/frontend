import React, { Component } from 'react';

import ApiRequest from '../util/ApiRequest';

class ProfileHeader extends Component {
  render() {
    return (
      <header className="_5axto">
        <div className="_de9bg">
          <div className="_8mm5v">
            <h1 className="_i572c">{this.props.user ? this.props.user.username : ''}</h1>
            <span className="_jxp6f _8okdy">
              <span className="_phrgb _7k49n">
                {(localStorage.getItem('token') && (this.props.user && (localStorage.getItem('username') !== this.props.user.username))) ? (
                  <button onClick={() => this.followAction((this.state && this.state.isFollowing) ? 0 : 1)} className={`_ah57t ${(this.state && this.state.isFollowing) ? '_6y2ah' : '_84y62'} _frcv2 _rmr7s`}>
                    {(this.state && this.state.isFollowing) ? 'Unfollow' : 'Follow'}
                  </button>)
                  : null}
              </span>
            </span>
          </div>
          <ul className="_9o0bc _bgr2x">
            <li className="_218yx">
              <a className="_s53mj">
                <span className="_bkw5z">{(this.state && this.state.followers) ? this.state.followers.length : '0'}</span>
                {' followers'}
              </a>
            </li>
            <li className="_218yx">
              <a className="_s53mj">
                <span className="_bkw5z">{(this.state && this.state.following) ? this.state.following.length : '0'}</span>
                {' following'}
              </a>
            </li>
          </ul>
          <div className="_bugdy">
            <h2 style={{ marginRight: '10px' }} className="_79dar">{this.props.user ? this.props.user.displayName : ''}</h2>
            <span>
              <span>{this.props.user ? this.props.user.bioDescription : ''}</span>
            </span>
          </div>
        </div>
      </header>
    );
  }

  followAction(action) {
    let params = location.pathname.split('/');
    let user = params[params.length - 1];
    if (action === 1) {
      ApiRequest.follow(user).then(res => {
        if (res.status === 200) {
          this.setState({ isFollowing: true });
        }
      });
    } else if (action === 0) {
      ApiRequest.unfollow(user).then(res => {
        if (res.status === 200) {
          this.setState({ isFollowing: false });
        }
      });
    }
  }

  componentDidMount() {
    if (this.props.user)
      this.setState({
        isFollowing: this.props.user.isFollowing
      });
    let params = location.pathname.split('/');
    let user = params[params.length - 1];
    ApiRequest.getFollowers(user).then(res => {
      console.log(res);
      this.setState({
        followers: res.data.data
      });
    });

    ApiRequest.getFollowing(user).then(res => {
      this.setState({
        following: res.data.data
      });
    });
  }
}

export default ProfileHeader;