const express = require('express');
const router = express.Router();


const messagesTable = [];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    exoplanetsTable: ['Trappist-1-d', 'Trappist-1-e', 'Trappist-1-f', 'Trappist-1-g']
  });
});

module.exports = router;

