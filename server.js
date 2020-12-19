const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sendMail = require('./mail.js');
require('dotenv').config(); // Load Environment Variables from a .env File

// Middleware
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

const getFreshDeskData = (res, req, next) => {
  console.log('Fresh Sales Middleware');
  next();
};

// Home Route Path
app.get('/', (req, res) => {
  res.render('index.html');
});
// AboutUs Route Path
app.get('/aboutus', (req, res) => {
  res.render('aboutus.html');
});
// Services Route Path
app.get('/services', (req, res) => {
  res.render('services.html');
});
// Partners Route Path
app.get('/partners', (req, res) => {
  res.render('partners.html');
});
// AboutUs Route Path
app.get('/contactus', (req, res) => {
  res.render('contactus.html');
});

// FreshSales Path
app.get('/freshsales', getFreshDeskData, (req, res) => {
  const API = 'Basic d2VVcjdrTkkxenVlUVo2NnZPY2w6WA==';
  const FD_ENDPOINT = 'newaccount1608116901000';
  let PATH = '/api/v2/tickets';
  const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;

  console.log('Making a Call To FreshDesc');

  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: API,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  fetch(URL, defaultOptions)
    .then((res) => res.json())
    .then((data) => console.log(data));

  res.render('freshSales.html');
});

// Contact Route Path
app.get('/contact', (req, res) => {
  res.render('aboutus.html');
});
// Contact From Submit Path
app.post('/contact', formSubmit);

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
