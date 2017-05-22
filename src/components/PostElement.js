import React, { Component } from 'react';

import '../views/styles/post.css';

import ApiRequest from '../util/ApiRequest';

const moment = require('moment');

class Post extends Component {
  render() {
    return (
      <article className="_h2d1o _55zw1 _p8mqr _qs5p4">
        <header className="_2ircu _p1uf5">
          <div className="_hghxm">
            <a className="_4zhc5 notranslate _jozwt" href={"/profile/" + this.props.post.authorId}>{this.props.post.author}</a>
            <div className="_lgng2">
            </div>
          </div>
        </header>
        <div className="_r3k3c">
          <div>
            <div className="_22yr2 _rx3v8">
              <div className="_jjzlb" style={{ paddingBottom: '100%' }}>
                <img className="_icyx7" id="pImage_0" src={this.props.post.imageUrl} />
              </div>
              <div className="_ovg3g">
              </div>
            </div>
          </div>
        </div>
        <div className="_mn52b">
          <section className="_ghat4 _knho6">
            <a className="_tk4ba _1tv0k" href="#" role="button" aria-disabled="false">
              <span className="_soakw coreSpriteLikeHeartOpen">Like</span>
            </a>
            <a className="_7gupx _hd0kr" href="#" role="button">
              <span className="_soakw coreSpriteComment">Comment</span>
            </a>
          </section>
          <section className="_hhrfo _orwu0">
            <div className="_kkf84 _oajsw">
              <a className="4zhc5 _lx2l2">{`${this.props.post.likes} likes`}</a>
            </div>
            <div className="_31wak _rq3s7">
              <a className="_4zhc5 notranslate _ebg8h" href={`/profile/${this.props.post.authroId}`}>{this.props.post.author + ' '}
                <span className="notbold">{this.props.post.textContent}</span>
              </a>
            </div>
            <div className="_3fmp4 _bv95x">
              <a className="_5l4x8" href={`/post/${this.props.post.id}`}>
                <time className="_9gcwa _379kp" dateTime={this.props.post.createdAt}>{this.getTimestamp(this.props.post.createdAt)}</time>
            </a>
            </div>
          </section>
        </div>
      </article>
    );
  }

  getTimestamp(createdAt) {
    let duration = Math.round(moment.duration(moment(new Date()).diff(createdAt)).asSeconds());
    let res = '';
    if (duration > 60) {
      duration = Math.round(duration / 60);
      if (duration > 60) {
        duration = Math.round(duration / 60);
        if (duration > 12) {
          res = `${moment(createdAt).format('DD MMMM YYYY')}`;
        } else res = `${duration} hours ago`;
      } else res = `${duration} minutes ago`;
    } else res = `${duration} seconds ago`;
    return res;
  }
}

export default Post;