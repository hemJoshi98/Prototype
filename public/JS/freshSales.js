async function asyncFreshDesk() {
  const PASSWORD = 'dummyPassword';
  var API_KEY = 'weUr7kNI1zueQZ66vOcl'; // Test Account
  const FD_ENDPOINT = 'newaccount1608116901000'; // Test Account
  // const API_KEY = 'jlPlNkcvQ7DRkb6N9tZ'; // NDG Account
  // const FD_ENDPOINT = 'ndgtechnologylimited'; // NDG Account
  let PATH = '/api/v2/tickets';
  const URL = `https://${FD_ENDPOINT}.freshdesk.com/${PATH}`;
  const ENCODING_METHOD = 'base64';
  const auth =
    'Basic ' + new Buffer.from(API_KEY + ':' + 'X').toString(ENCODING_METHOD);
  console.log(auth);
  let freshDesc;
  async function asyncFreshDesk() {
    console.log('Making a Call To FreshDesc');
    const defaultOptions = {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: auth,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
    const freshDescReq = new Request(URL, defaultOptions);
    const res = await fetch(freshDescReq);
    const freshDesc = await res.json();
    const TICKET = 0;
    console.log(freshDesc);
    console.log(freshDesc[TICKET].subject);
    console.log(freshDesc[TICKET].type);
    console.log(freshDesc[TICKET].updated_at);
  }

  return 'End';
}

module.exports = asyncFreshDesk;
