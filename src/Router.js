import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

/**
 * Load views
 */
import Login from './views/Login'
import Feed from './views/Feed';

class App extends Component {
  render() {
    let token = window.localStorage.getItem('token');
    if (window.location.pathname === '/') {
      if (token) {
        window.location.pathname = '/feed';
      } else if (!token) window.location.pathname = '/login';
    }

    

    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login}/>
          <Route path="/feed" component={Feed} />
          <Route path="/profile/:id" /> 
        </div>
      </Router>
    );
  }
}

export default App;
