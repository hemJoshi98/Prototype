require('dotenv').config(); // Load Environment Variables from a .env File
const express = require('express');
const app = express();
const path = require('path');

// Data parsing
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// Render home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Sending email
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Data: ', req.body);

  // sendMail(name, email, message, function (err, data) {
  //   if (err) {
  //     console.log('ERROR: ', err);
  //     return res.status(500).json({ message: err.message || 'Internal Error' });
  //   }
  //   console.log('Email sent!!!');
  //   return res.json({ message: 'Email sent!!!!!' });
  // });
});

// Server Port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
