const express = require('express');
const router = express.Router();

router.get('/', async function(req, res, next) {
  res.redirect('/tasks');
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About Us',
    currentPage: 'about'
  });
});

module.exports = router;
