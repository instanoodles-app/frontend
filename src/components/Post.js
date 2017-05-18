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
            <a className="_4zhc5 notranslate _jozwt" title="kmtoolontori" href={"/profiles/" + this.props.post.authorId}>{this.props.post.author}</a>
            <div className="_lgng2">
            </div>
          </div>
        </header>
        <div className="_r3k3c">
          <div>
            <div className="_22yr2 _rx3v8">
              <div className="_jjzlb" style={{paddingBottom: '100%'}}>
                <img className="_icyx7" id="pImage_0" src="https://static.ylilauta.org/files/y0/orig/k4ckvype/d8VQJ4n.png" />
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
            </a></section><section className="_hhrfo _orwu0">
            <div className="_3fmp4 _bv95x"><a className="_5l4x8" href="/p/BUO1regloGT/">
              <time className="_9gcwa _379kp" datetime="2017-05-18T11:22:33.000Z" title="May 18, 2017">{`${Math.round(moment.duration(moment(new Date()).diff(this.props.post.createdAt)).asMinutes())} minutes ago`}</time>
            </a>
            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default Post;