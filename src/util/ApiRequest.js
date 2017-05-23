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

module.exports.createUser = user => {
  return axios.post(base + '/users', user);
}

module.exports.getUser = userId => {
  return axios.get(base + '/users/' + userId, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.getFollowing = userId => {
  return axios.get(base + '/users/' + userId + '/following', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.getFollowers = userId => {
  return axios.get(base + '/users/' + userId + '/followers', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.getPost = postId => {
  return axios.get(base + '/posts/' + postId, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.getLikesForPost = postId => {
  return axios.get(base + '/posts/' + postId + '/likes');
}

module.exports.getCommentsForPost = postId => {
  return axios.get(base + '/posts/' + postId + '/comments');
}

module.exports.createComment = (postId, content) => {
  return axios.put(base + '/posts/' + postId + '/comments', { content }, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.createLike = postId => {
  return axios.put(base + '/posts/' + postId + '/likes', null, {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}

module.exports.deleteLike = postId => {
  return axios.delete(base + '/posts/' + postId + '/likes', {
    headers: {
      authorization: window.localStorage.getItem('token')
    }
  });
}