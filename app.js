var express = require('express');
var app = express();
var server = require('http').createServer(app);
var request = require('request');
var rp = require('request-promise');

var port = process.env.PORT || 3000;
global.appDir = __dirname;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/public'));


app.get('/hi', function (req, res) {
  return res.json({ message: 'Hi' });
});

app.get('/github/:username', function (req, res) {
  var options = {
    uri: 'https://api.github.com/users/'+req.params.username,
    qs: {
      access_token: 'ddac053d802b4ab05bd845e2e5851bfc855a5e3e'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true 
  };
  rp(options)
    .then(function (repos) {
      console.log('User has %d repos', repos.length);
      return res.json({ message: repos });
    })
    .catch(function (err) {
      return res.json({ error: err });
    });
})

app.get('/orgs', function (req, res) {
  var options = {
    uri: 'https://api.github.com/users/borodinaelena/orgs',
    qs: {
      access_token: 'ddac053d802b4ab05bd845e2e5851bfc855a5e3e'
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true 
  };
  rp(options)
    .then(function (repos) {
      console.log('User has %d repos', repos.length);
      return res.json({ message: repos });
    })
    .catch(function (err) {
      return res.json({ error: err });
    });
})

app.get('/*', function (req, res) {
  res.sendFile(appDir + '/public/index.html');
});


