'use strict';

const request = require('request-promise');

function getUser(access_token, username){
  return request({
    uri: 'https://api.github.com/users/' + username,
    qs: {
      access_token: access_token
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  });
}

function getReposForUser(access_token, username){ 
  return request({
    uri: 'https://api.github.com/users/' + username + '/repos',
    qs: {
      access_token: access_token
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true
  })
}

module.exports = {
  getUser: getUser,
  getReposForUser: getReposForUser
}