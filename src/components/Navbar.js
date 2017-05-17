import React, { Component } from 'react';

import '../views/styles/nav.css';

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
                  <span className="_n3dw7 coreSpriteSearchIcon">
                  </span>
                  <div className="_jacrq">
                  </div>
                </div><div className="_nhei4">
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
    this.setState({
      searchInput: e.target.value 
    });
  }
}

export default Navbar;