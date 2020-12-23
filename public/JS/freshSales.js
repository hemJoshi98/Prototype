console.log('Loading FreshSales...');

async function asyncFreshDesk() {
  const TOKEN = 'Basic d2VVcjdrTkkxenVlUVo2NnZPY2w6WA==';
  const FD_ENDPOINT = 'newaccount1608116901000';
  // const TOKEN = 'Basic amxQSU5rY3ZRN0RSa2I2Tjl0WjpY'; // NDG Account
  // const FD_ENDPOINT = 'ndgtechnologylimited'; // NDG Account
  let PATH = '/api/v2/tickets';
  const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;

  console.log('Making a Call To FreshDesc');

  const defaultOptions = {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: TOKEN,
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  const freshDescReq = new Request(URL, defaultOptions);

  const res = await fetch(freshDescReq);
  const data = await res.json();

  const TICKET = 1;

  console.log(data);
  console.log(data[TICKET].subject);
  console.log(data[TICKET].type);
  console.log(data[TICKET].updated_at);

  const dateNow = new Date();
  console.log(dateNow.toLocaleDateString('en-GB'));
  console.log(
    dateNow.getHours(),
    dateNow.getMinutes(),
    dateNow.getMinutes(),
    dateNow.getSeconds()
  );
}

const fluidOne = document.querySelector('#createTicket');
fluidOne.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.querySelector('.name').value;
  const subject = document.querySelector('.subject').value;
  const email = document.querySelector('.email').value;
  const description = document.querySelector('.description').value;

  const form = e.target;
  // error handling
  if (name == '' || subject == '' || email == '' || description == '') {
    console.log('Form Error');
  } else {
    console.log('Form Submitted');
    form.submit();
  }
});
