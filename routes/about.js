/**
* @Author: mdrhri-6
* @Date:   2017-03-04T13:17:14+01:00
* @Last modified by:   mdrhri-6
* @Last modified time: 2017-03-04T16:13:27+01:00
*/

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
