require('dotenv').config(); // Load Environment Variables from a .env File
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE, // replace with service provider
  auth: {
    user: process.env.EMAIL_NAME, // replace with your email
    pass: process.env.EMAIL_PASSWORD, // replace with your password
  },
});

const sendMail = (name, email, message, callback) => {
  const mailOptions = {
    from: process.env.EMAIL_NAME, // replace with your email
    to: process.env.MAILING_LIST, // replace with your mailing list
    subject: `<p>Customer Contact Form<p>`,
    html: `<p>Customer Contact Name: <span style="color: red">${name}</span></p>
    <p>Email: <span style="color: red">${email}</span></p>
    <p>Message: <br />${message}</p>`,
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
