import React, { Component } from 'react';

import '../views/styles/nav.css';

import ApiRequest from '../util/ApiRequest';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="_onabe _5z3y6" role="navigation">
          <div className="_fjpuc _sq03j">
            <div className="_6v8vp">
              <div className="_df358">
                <div className="_jha5b">
                  <div className="_om391">
                    <a className="_1b8in _soakw coreSpriteDesktopNavLogoAndWordmark" href="/">
                    </a>
                  </div>
                </div>
                <div className="_9pxkq _icv3j">
                  <input type="text" className="_9x5sw _qy55y" placeholder="Search" onChange={e => this.onSearchChaned(e)} value={this.props ? this.props.searchInput : ''} />
                  <span className="_n3dw7 coreSpriteSearchIcon"></span>
                  <div className="_jacrq"></div>
                  {(this.state && this.state.searchBox) ? this.state.searchBox : null}
                </div>
                <div className="_nhei4">
                  <div className="_pq5am">
                    <div className="_7smet">
                      <a className="_soakw _vbtk2 coreSpriteDesktopNavExplore" href="/explore/"></a>
                    </div>
                    <div className="_7smet">
                      <a href="#" className="_im3et _vbtk2 coreSpriteDesktopNavActivity">
                        <span className="_soakw"></span>
                      </a>
                    </div>
                    <div className="_7smet">
                      <a className="_soakw _vbtk2 coreSpriteDesktopNavProfile" href="/profile/"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div >
    );
  }

  onSearchChaned(e) {
    if (e.target.value.length % 2 != 0) {
      return;
    }
    if (e.target.value.length === 0) {
      this.setState({
        searchBox: null
      });
      return;
    }
    ApiRequest.searchUsers(e.target.value).then(result => {
      let users = result.data.data;
      let htmlElems = [];
      for (let user of users) {
        console.log(user);
        htmlElems.push((
          <a className="_k2vj6 _xk9bu" href={"/profile/" + user.id} >
            <div className="_oluat">
              <div className="_i1d7g">
                <div className="_orhxc">
                  <span className="_qfezm">{user.username}</span>
                </div>
                <span className="_qasqy">{user.displayName}</span>
              </div>
            </div>
          </a>
        ))
      }
      this.setState({
        searchBox: this.getSearchResultBox(htmlElems)
      });
    });
  }

  getSearchResultBox(results) {
    return (
      <div>
        <div className="_pnw2j" />
        <div className="_o1o4h">
          <div className="_q8rex">
            {results}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;