const express = require('express');
const app = express();
const path = require('path');
const sendMail = require('./mail.js');

const bodyParser = require('body-parser');
app.use(bodyParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Global Variables
let customerName = 'name';

// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Global Patch #1

function passCustomerData(req, res, next) {
  const { name, email, message } = req.body;
  res.locals.name = name;
  console.log('passing data ...');
  next();
}

function formSubmit(req, res) {
  const { name, email, message } = req.body;
  console.log('Data: ', name);
  // res.json({ message: 'Email sent!!!!!' });

  // Calling Mail.js to execute form submit
  sendMail(name, email, message, function (err, data) {
    if (err) {
      console.log('ERROR: ', err);
      return res.status(500).json({ message: err.message || 'Internal Error' });
    }
    console.log('Email sent!!!');
    return res.json({ message: 'Email sent!!!!!' });
  });

  res.redirect('/contact');
}

// Form submit path/page
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'views', 'emailMessage.html'));
});

// From Submit path
app.post('/contact', passCustomerData, formSubmit);

// Server Port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
