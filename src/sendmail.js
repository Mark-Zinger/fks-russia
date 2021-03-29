const fs = require('fs');
const path = require('path');
const mailTemplate = require('./mail-template')

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const sendmail = ({email, fullname}) => {

  var transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'kibersportfederation@gmail.com',
      pass: ''
    }
  }));
  
  return transporter.sendMail({
    from: 'kibersportfederation@gmail.com',
    to: email,
    subject: 'Подтверждение аккаунта',
    html: mailTemplate({fullname})
  })
}

module.exports = sendmail;



