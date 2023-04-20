// Form validation goes here

//show message following the type of input
function showMessage(input, message, type) {
    const msg = input.parentNode.querySelector("small");
    msg.innerHTML = message;
  
    //update input class
    input.className = type ? "success" : "error";
    return type;
  }
  function showError(input, message) {
    return showMessage(input, message, false);
  }
  function showSuccess(input) {
    return showMessage(input, "", true);
  }
  function hasValue(input, message) {
    if (input.value.trim() === "") {
      return showError(input, message);
  
    }
    return showSuccess(input);
  }
  
  function validateEmail(input, requiredMsg, invalidMsg) {
    //check if value is not empty
    
      if (!hasValue(input, requiredMsg)) {
        return false;
    }
    //validate email RegEx 
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    const email = input.value.toLowerCase().trim();
  
    if (!emailRegex.test(email)) {
      return showError(input, invalidMsg);
  
    }
    return true;  
  }

  const form = document.getElementById("register");
  const NAME_REQ = "Please Enter your name";
  const MSG_REQ = "Field Cannot be empty";
  const EMAIL_REQ = "Please Enter Your email";
  const EMAIL_INVALID = "Please Enter a correct email address";
  const btn = document.getElementById('submit-btn');
  
   btn.addEventListener("click", function (event) {
    //reject submission of form
    event.preventDefault();
  
    //validate form
    let nameValid = hasValue(form.elements["name"], NAME_REQ);
    let emailValid = validateEmail(form.elements["email"], EMAIL_REQ, EMAIL_INVALID);
    let msgValid = hasValue(form.elements["message"], MSG_REQ);
    //if valid submit form
    if (nameValid && emailValid && msgValid) {
        form.submit();
    }
});
