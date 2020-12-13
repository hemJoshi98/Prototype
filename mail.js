require('dotenv').config(); // Load Environment Variables from a .env File
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_NAME, //replace with your email
    pass: process.env.EMAIL_PASSWORD, //replace with your password
  },
});

const sendMail = (name, email, message, cb) => {
  const mailOptions = {
    from: process.env.EMAIL_NAME, // TODO replace this with your own email
    to: process.env.EMAIL_LIST, // TODO: the receiver email has to be authorized for the free tier
    subject: `Contact name: ${name}`,
    html: `<h4>Contact details</h4>
    <p> email:${email} </p><br>
    <p> message:${message} </p><br>`,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return cb(err, null);
    }
    return cb(null, data);
  });
};

module.exports = sendMail;
