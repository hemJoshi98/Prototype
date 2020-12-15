require('dotenv').config(); // Load Environment Variables from a .env File
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_NAME, //replace with your email
    pass: process.env.EMAIL_PASSWORD, //replace with your password
  },
});

const sendMail = (name, email, message, callback) => {
  const mailOptions = {
    from: process.env.EMAIL_NAME, //replace with your email
    to: process.env.MAILING_LIST, //replace with your email
    subject: `Customer Contact Form`,
    html: `<h4>Customer Contact Name: ${name}</h4>
    <p> email: ${email} </p><br>
    <p> Message: <br>${message} </p><br>`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      callback();
      return console.log('Error occurs');
    }
    callback();
    return console.log('Email sent!!!');
  });
};

module.exports = sendMail;
