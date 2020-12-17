const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sendMail = require('./mail.js');
const { restart } = require('nodemon');
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
app.get('/freshsales', (req, res) => {
  // const PASSWORD = 'dummyPassword';
  // var API_KEY = 'weUr7kNI1zueQZ66vOcl'; // Test Account
  // const FD_ENDPOINT = 'newaccount1608116901000';
  // // const FD_ENDPOINT = 'ndgtechnologylimited'; // NDG Account
  // // const API_KEY = 'jlPlNkcvQ7DRkb6N9tZ'; // NDG Account
  // let PATH = '/api/v2/tickets';
  // const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;
  // const enocoding_method = 'base64';
  // const auth =
  //   'Basic ' + new Buffer.from(API_KEY + ':' + 'X').toString(enocoding_method);
  // console.log(auth);

  // let freshDesc;

  // async function asyncFreshDesk() {
  //   console.log('Making a Call To FreshDesc');

  //   const defaultOptions = {
  //     method: 'GET',
  //     mode: 'cors',
  //     headers: {
  //       Authorization: auth,
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //   };

  //   const freshDescReq = new Request(URL, defaultOptions);

  //   const res = await fetch(freshDescReq);
  //   const freshDesc = await res.json();

  //   const TICKET = 0;

  //   console.log(freshDesc);
  //   console.log(freshDesc[TICKET].subject);
  //   console.log(freshDesc[TICKET].type);
  //   console.log(freshDesc[TICKET].updated_at);
  // }

  res.render('freshSales.html');
});

app.get('/api', (req, res) => {
  console.log(req.body);
});

// Contact From Submit Path
app.post('/contact', formSubmit);

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`));
