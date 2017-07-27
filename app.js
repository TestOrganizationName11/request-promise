var express = require('express');
var app = express();
var server = require('http').createServer(app);
var request = require('request-promise');
let path = require('path');
let bodyParser = require('body-parser');
const github = require('./github');

var port = process.env.PORT || 3000;
global.appDir = __dirname;

server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(appDir, 'public')));


app.get('/hi', function (req, res) {
  return res.json({ message: 'Hi' });
});

app.get('/github/:username', function (req, res) {

  let access_token = '2350e67a8d06bc2968f20f86f4d3f5eb414f2c55'


  github.getUser(access_token, req.params.username)
  .then(function (user) {
    return github.getReposForUser(access_token, user.login);
  })
  .then(function (repos){
    return res.json(repos);
  })
  .catch(function (err) {
    console.log(err);
    return res.json({ error: err });
  });
})
// Promise.map(collectionUsers, function(user){
//   return getGithubUser(user);
// }).then(function(result){

// })

app.get('/*', function (req, res) {
  res.sendFile(appDir + '/public/index.html');
});


//eunicesazhneva
//borodinaelena
//debkh