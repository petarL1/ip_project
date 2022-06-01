var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('tasks', {
    title: 'Your To Do List',
    currentPage: 'home'
  });
});

module.exports = router;
