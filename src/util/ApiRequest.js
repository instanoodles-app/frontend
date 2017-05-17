const axios = require('axios');

const base = 'http://localhost:8000'

module.exports = {};

module.exports.login = (username, password, callback) => {
  return axios.post(base + '/users/authenticate', {
    username,
    password
  });
}

module.exports.feed = () => {
  return axios.get(base + '/posts/feed', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.me = () => {
  return axios.get(base + '/users/me', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.searchUsers = query => {
  return axios.get(base + '/users/search?query=' + query); 
}

