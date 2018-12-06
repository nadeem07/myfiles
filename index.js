var express=require('express');
var http = require('http');
var nodemailer=require('nodemailer');
var mail=require('./mail');
var fs=require('fs');
var port = process.env.PORT || 1337;

console.log("hello");
var app=express();
app.get('/',function(req,res){
	res.sendFile(__dirname + '/htmlfile.html');
});

app.get('/sendmail',function(req,res){
	var address=req.query.email;
	console.log(address);
	mail.mailer(address);
  res.end();
});



app.listen(1337,function(){
	console.log("express started on port 1337");
});

console.log("Server running at http://localhost:%d", port);
