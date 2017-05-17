import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item" href="/">
              <img src="/img/logo.png" alt="Instanoodles logo" />
            </a>
          </div>
          <div className="nav-right nav-menu">
            <a className="nav-item">
              <div className="profile-div">
                <p />
              </div>
            </a>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;