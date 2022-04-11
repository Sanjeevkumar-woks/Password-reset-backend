var nodemailer = require('nodemailer');

const send_mail = async (email, subject, content) => {
var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'sanjeevmanagutti@outlook.com',
    pass: 'Sanjeev@143'
  }
});

var mailOptions = {
  from: 'sanjeevmanagutti@outlook.com',
  to: 'sanjeevmanagutti@gmail.com',
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
module.exports = send_mail;
