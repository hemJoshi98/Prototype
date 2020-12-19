console.log('Loading FluidOne...');

const fluidOne = document.querySelector('#fluidForm');
fluidOne.addEventListener('submit', (e) => {
  e.preventDefault();
  const postCode = document.querySelector('.postCode').value;
  const email = document.querySelector('.email').value;
  console.log(postCode);
  console.log(email);

  const form = e.target;
  // error handling
  if (postCode == '' || email == '') {
    console.log('Form Error');
  } else {
    form.submit();
  }
});
