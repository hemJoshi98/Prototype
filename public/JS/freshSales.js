console.log('Loading FreshSales...');

async function asyncCallOne() {
  console.log('Making asyncCall One');

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

async function asyncFreshDesk() {
  const domain = 'ndgtechnologylimited';
  const api = 'jlPlNkcvQ7DRkb6N9tZ';

  console.log('Making a Call To FreshDesc');

  const res = await fetch(`https://${domain}.freshdesk.com/${api}/v2/tickets`, );
  const data = await res.json();

  console.log(data);
}
