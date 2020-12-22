const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
// Helper files
const sendMail = require('./mail.js');
// From 2.0.35 NDG.prod
const request = require('request');
const sha512 = require('js-sha512');

require('dotenv').config(); // Load Environment constiables from a .env File

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
// FluidOne Route Path
app.get('/fluidOne', (req, res) => {
  res.render('fluidOne.html');
});

// FreshSales Path
app.get('/freshsales', getFreshDeskData, (req, res) => {
  // Testing Account
  // const API_KEY = 'weUr7kNI1zueQZ66vOcl';
  // const FD_ENDPOINT = 'newaccount1608116901000';
  // NDG Account
  const API_KEY = 'jlPINkcvQ7DRkb6N9tZ';
  const FD_ENDPOINT = 'ndgtechnologylimited';

  let PATH = '/api/v2/tickets';
  const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;
  const ENCODING_METHOD = 'base64';
  const AUTHORIZATION_KEY =
    'Basic ' + new Buffer.from(API_KEY + ':' + 'X').toString(ENCODING_METHOD);

  console.log('Making a Call To FreshDesc');

  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: AUTHORIZATION_KEY,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  fetch(URL, defaultOptions)
    .then((res) => res.json())
    .then((data) => {
      console.log('Loading FreshSDesk Data: ', data);
      res.render('freshSales.html', { data: data });
    })
    .catch((error) => {
      console.log(error.message);
      res.redirect('error.html');
    });
});

// Contact Route Path
app.get('/contact', (req, res) => {
  res.render('aboutus.html');
});
// Contact From Submit Path
app.post('/contact', formSubmit);

// Fluid One

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
