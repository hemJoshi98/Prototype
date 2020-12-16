console.log('Loading FreshSales...');

async function asyncCallOne() {
  console.log('Making asyncCall One');

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

async function asyncFreshDesk() {
  var API_KEY = 'weUr7kNI1zueQZ66vOcl'; // Test Account
  const PASSWORD = 'madfuM-8newno-gaqgin';
  const FD_ENDPOINT = 'newaccount1608116901000';
  // const FD_ENDPOINT = 'ndgtechnologylimited';
  // const API = 'jlPlNkcvQ7DRkb6N9tZ'; // NDG Account
  let PATH = '/api/v2/tickets';
  const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;

  console.log('Making a Call To FreshDesc');

  const defaultOptions = {
    method: 'POST',
    headers: {
      user: API_KEY,
      pass: PASSWORD,
      sendImmediately: true,
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
  };

  const freshDescReq = new Request(URL, defaultOptions);

  const res = await fetch(freshDescReq);
  const data = await res.json();

  console.log(data);
}

function doFetch(ev) {
  // let url = 'https://localhost/apache/no-browse/sample.json';
  const API_KEY = 'ndgtechnologylimited';
  const api = 'jlPlNkcvQ7DRkb6N9tZ';
  const url = `https://${API_KEY}.freshdesk.com/${api}/v2/tickets`;

  let h = new Headers();
  h.append('Accept', 'application/json');

  let req = new Request(url, {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors',
  });

  fetch(req)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('BAD HTTP stuff');
      }
    })
    .then((jsonData) => {
      console.log(jsonData);
      p.textContent = JSON.stringify(jsonData, null, 4);
    })
    .catch((err) => {
      console.log('ERROR:', err.message);
    });
}
