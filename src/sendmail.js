var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');




// var transporter = nodemailer.createTransport(smtpTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   auth: {
//     user: 'kibersportfederation@gmail.com',
//     pass: 'fcs-russia-pass'
//   }
// }));

// var mailOptions = {
//   from: 'kibersportfederation@gmail.com',
//   to: 'lllessive@gmail.com',
//   subject: 'Подтверждение аккаунта',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions)

// export default ({email, fullName}) => {
  
//   return transporter.sendMail({
//     from: 'kibersportfederation@gmail.com',
//     to: email,
//     subject: 'Подтверждение аккаунта',
//     text: 'That was easy!'
//   })
// }
