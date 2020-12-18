async function asyncFreshDesk() {
  const PASSWORD = 'dummyPassword';
  var API_KEY = 'weUr7kNI1zueQZ66vOcl'; // Test Account
  const FD_ENDPOINT = 'newaccount1608116901000';
  // const FD_ENDPOINT = 'ndgtechnologylimited'; // NDG Account
  // const API_KEY = 'jlPlNkcvQ7DRkb6N9tZ'; // NDG Account
  let PATH = '/api/v2/tickets';
  const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;

  console.log('Making a Call To FreshDesc');

  // const defaultOptions = {
  //   method: 'GET',
  //   mode: 'cors',
  //   headers: {
  //     Authorization: 'Basic d2VVcjdrTkkxenVlUVo2NnZPY2w6WA==',
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // };

  // const freshDescReq = new Request(URL, defaultOptions);

  // const res = await fetch(freshDescReq);
  // const data = await res.json();

  // const TICKET = 1;

  // console.log(data);
  // console.log(data[TICKET].subject);
  // console.log(data[TICKET].type);
  // console.log(data[TICKET].updated_at);

  return 'End';
}

module.exports = asyncFreshDesk;
