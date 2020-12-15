const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sendMail = require('./mail.js');
require('dotenv').config(); // Load Environment Variables from a .env File

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Submit Form middleware
function formSubmit(req, res) {
  const { name, email, message } = req.body;
  console.log('Data: ', req.body);

  // Calling Mail.js to execute form submit
  sendMail(name, email, message, () => {
    res.render('success.html', { data: req.body });
  });
}

// Home Route Path
app.get('/', function (req, res) {
  res.render('index.html');
});

// From Submit Path
app.post('/contact', formSubmit);

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
