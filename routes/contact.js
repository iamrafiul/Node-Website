/**
* @Author: mdrhri-6
* @Date:   2017-03-04T13:24:08+01:00
* @Last modified by:   mdrhri-6
* @Last modified time: 2017-03-04T16:16:19+01:00
*/

var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');


/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/*  POST the contact form */
router.post('/send', function(req, res, next){
  // Make a transporter
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'abcd@efgh.com', // Your email address
      pass: 'asdf' //Your password
    }
  });

  // Set the options for the email.
  var mailOptions = {
    from: req.body.name + ' <' + req.body.email + '> ',
    to: 'abcd@efgh.com', // Your email address
    subject: 'Website Submission',
    text: 'You have a new submission with the following details... Name: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message,
    html: '<p>You got a new submission with the following details..</p><ul><li>Name: '+ req.body.name + '</li><li>Email: '+ req.body.email + '</li><li>Message: '+ req.body.message + '</li></ul>',
  };

  //Send email
  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      console.log(error);
      res.redirect('/');
    } else {
      console.log('Message Sent: ' + info.response);
      res.redirect('/');
    }
  });
});

module.exports = router;
