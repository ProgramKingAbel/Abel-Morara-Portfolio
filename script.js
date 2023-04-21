// Form validation goes here

function showMessage(input, message, type) {
  const msg = input.parentNode.querySelector('small');
  msg.innerHTML = message;

  // update input class
  input.className = type ? 'success' : 'error';
  return type;
}
function showError(input, message) {
  return showMessage(input, message, false);
}
function showSuccess(input) {
  return showMessage(input, '', true);
}
function hasValue(input, message) {
  if (input.value.trim() === '') {
    return showError(input, message);
  }
  return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
  // check if value is not empty

  if (!hasValue(input, requiredMsg)) {
    return false;
  }
  // validate email RegEx
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

  const email = input.value.trim();
  const email2 = input.value.trim().toLowerCase();

  if (!emailRegex.test(email) && (email !== email2)) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.getElementById('register');
const NAME_REQ = 'Please Enter your name';
const MSG_REQ = 'Field Cannot be empty';
const EMAIL_REQ = 'Please Enter Your email';
const EMAIL_INVALID = 'Please Enter a correct email address in Lowercase';
const btn = document.getElementById('submit-btn');

btn.addEventListener('click', (event) => {
  // reject submission of form
  event.preventDefault();

  // validate form
  const nameValid = hasValue(form.elements.name, NAME_REQ);
  const emailValid = validateEmail(form.elements.email, EMAIL_REQ, EMAIL_INVALID);
  const msgValid = hasValue(form.elements.message, MSG_REQ);
  // if valid submit form
  if (nameValid && emailValid && msgValid) {
    form.submit();
  }
});

// SAVE DATA TO LOCAL STORAGE
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const msgInput = document.getElementById('message');

function storeData() {
  // store user input in object
  const userData = {
    name: nameInput.value,
    email: emailInput.value,
    message: msgInput.value,

  };
  // store userData in localStorage
  localStorage.setItem('userData', JSON.stringify(userData));
}
// trigger function to save data on event
nameInput.addEventListener('focusout', storeData);
emailInput.addEventListener('focusout', storeData);
msgInput.addEventListener('focusout', storeData);

// retrieve data and populate fields
const data = JSON.parse(localStorage.getItem('userData'));
// console.log(data);

//-------------------- ENTER CODE HERE --------------------
 
