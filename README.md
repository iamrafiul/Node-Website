# Node-Website
A simple website built in NodeJS with JADE as the template engine and "nodemailer" module for email contact functionality.


## How To Run
To run the project go to the local directory of your computer where the project is and type:

```
npm start
```

If everything goes well, you will have the nodejs server running at localhost at 3000 port(default port for nodejs)

For making the email system available, go to /routes/contact.js and change the "user" and "pass" of the following part with your own email address and password. 

```
auth: {
  user: 'abcd@efgh.com', // Your email address
  pass: 'asdf' //Your password
}
```

Also change the "to" part of the mailOptions with your email address. Make sure you are logged in into your gmail while trying to use the contact page.

Good luck!
