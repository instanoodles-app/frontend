import React, { Component } from 'react';

class NewButton extends Component {
  render() {
    return (
      <div className="newbutton">
        <span onClick={() => {window.location.pathname = '/create'}}>+</span>
      </div>
    )
  }

  componentWillMount() {
    require('../views/styles/newbtn.css');
  }
}

export default NewButton;