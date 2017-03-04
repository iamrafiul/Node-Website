/**
* @Author: mdrhri-6
* @Date:   2017-03-04T10:29:50+01:00
* @Last modified by:   mdrhri-6
* @Last modified time: 2017-03-04T16:13:34+01:00
*/



var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
