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
  return axios.get(base + '/posts/feed');
}

