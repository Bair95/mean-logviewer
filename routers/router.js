var express = require('express');

var router = express();
var home = require('../controllers/home');
// user routes
router.get('/', home.start)


module.exports = router;