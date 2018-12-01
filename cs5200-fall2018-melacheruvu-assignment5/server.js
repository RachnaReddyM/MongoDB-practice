var express = require('express')
var app = express()
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

require('./data/db')()
const movieDao = require('./data/models/movie.dao.server')
const likesDao = require('./data/models/likes.dao.server')
const userDao = require('./data/models/user.dao.server')

app.post('/api/likes', (req, res) =>
  likesDao.likes('5beb79cc55e0b19201072bcf', req.body.imdbID)
    .then(like => res.send(like)))
  // movieDao
  //   .createMovie(req.body)
  //   .then(movie => res.send(movie)))

app.get('/api/movie/:imdbID/likes', (req, res) =>
  likesDao
    .findAllLikesForMovie(req.params.imdbID)
    .then(likes => res.send(likes))
)

app.get('/api/user/:userId/likes', (req, res) =>
  likesDao
    .findAllLikesForUser(req.params.userId)
    .then(likes => res.send(likes))
)

app.get('/api/hello',
  (req, res) => res.send('hello world!!!'))

app.listen(3000)