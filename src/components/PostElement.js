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
              <span onClick={e => this.likeClicked(e)} className="_soakw coreSpriteLikeHeartOpen">Like</span>
            </a>
            {(this.state && this.state.comments) ? '' : (
            <a className="_7gupx _hd0kr" href={`/post/${this.props.post.id}`} role="button">
              <span className="_soakw coreSpriteComment">Comment</span>
            </a>)}
          </section>
          <section className="_hhrfo _orwu0">
            <div className="_kkf84 _oajsw">
              <a className="4zhc5 _lx2l2">{`${this.props.post.likes || (this.props.likes ? this.props.likes.length : 0)} likes`}</a>
            </div>
            <div className="_31wak _rq3s7">
              <ul className="_h3rdq">
                <li className="_99ch8">
                  <a className="_4zhc5 notranslate _ebg8h" href={`/profile/${this.props.post.authroId}`}>{this.props.post.author + ' '}</a>
                  <span><span><span>{this.props.post.textContent}</span></span></span>
                </li>
                {(this.state && this.state.comments) ? this.state.comments : ''}
              </ul>
            </div>
            <div className="_3fmp4 _bv95x">
              {!this.props.comments ? (<a className="_5l4x8" href={`/post/${this.props.post.id}`}>view comments</a>) : null}
              <br />
              <a className="_5l4x8" href={`/post/${this.props.post.id}`}>
                <time className="_9gcwa _379kp" dateTime={this.props.post.createdAt}>{this.getTimestamp(this.props.post.createdAt)}</time>
              </a>
            </div>
            {(this.state && this.state.comments) ? this.getCommentForm() : ''}
          </section>
        </div>
      </article>
    );
  }

  likeClicked(e) {
    e.persist();
    let params = location.pathname.split('/');
    let post = params[params.length - 1];
    if (post == 'feed') {
      post = this.props.post.id;
    }
    if (e.target.classList.contains('coreSpriteLikeHeartOpen')) {
      ApiRequest.createLike(post).then(res => {
        if (res.status === 200) {
          e.target.classList.remove('coreSpriteLikeHeartOpen');
          e.target.classList.add('coreSpriteLikeHeartFull');
        } else if (res.status === 401) window.location.pathname = '/login';
      });
    } else {
      ApiRequest.deleteLike(post).then(res => {
        if (res.status === 200) {
          e.target.classList.remove('coreSpriteLikeHeartFull');
          e.target.classList.add('coreSpriteLikeHeartOpen');
        }
      });
    }
  }

  formSubmitted(e) {
    e.preventDefault();
    let params = location.pathname.split('/');
    let post = params[params.length - 1];
    console.log(this.props);
    ApiRequest.createComment(post, this.state.newComment).then(res => {
      if (res.status === 200) {
        let comments = this.state.comments;
        comments.push((
          <li className="_99ch8">
            <a className="_4zhc5 notranslate _ebg8h" href={`/profile/${res.data.data.userId}`}>{localStorage.getItem('username') + ' '}</a>
            <span><span><span>{res.data.data.content}</span></span></span>
          </li>));
        this.setState({
          comments
        });
      } else if (res.status === 401) window.location.pathname = '/login';
    });
  }

  commentChanged(e) {
    this.setState({
      newComment: e.target.value
    });
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

  componentDidMount() {
    let comments = [];
    if (this.props.comments) {
      for (let comment of this.props.comments) {
        comments.push((
          <li className="_99ch8">
            <a className="_4zhc5 notranslate _ebg8h" href={`/profile/${comment.userId}`}>{comment.user.username + ' '}</a>
            <span><span><span>{comment.content}</span></span></span>
          </li>));
      }

      this.setState({
        comments
      });
    }
  }

  getCommentForm() {
    return (
      <section className="_saf51 _tbt2l">
        <form className="_sk455" onSubmit={e => this.formSubmitted(e)}>
          <input type="text" className="_2hc0g _qy55y" placeholder="Add a comment..." value={(this.state && this.state.newComment) ? this.state.newComment : ''} onChange={e => this.commentChanged(e)} />
        </form>
      </section>
    );
  }
}

export default Post;