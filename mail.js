var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'cmn003@chowgules.ac.in',
    pass: 'canfirminocoutinho@1'
  }
});

var mailOptions = {
  from: 'cmn003@chowgules.ac.in',
  to: 'aksp89@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});