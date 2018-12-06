
function mailer(reciever){
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'your email',
  to: reciever,
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

 
}