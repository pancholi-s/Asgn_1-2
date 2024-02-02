function showAlert(message) {
  var alertBox = document.getElementById('alertBox');
  alertBox.innerHTML = message;
  alertBox.style.display = 'block';
  setTimeout(function() {
      alertBox.style.display = 'none';
  }, 3000); // Hide alert after 3 seconds
}

function validateLogin() {
  var loginEmail = document.querySelector('form.login input[type="text"]').value;
  var loginPassword = document.querySelector('form.login input[type="password"]').value;

  // You can add further validation if needed
  return true;
}

function validateSignUp() {
  var signupEmail = document.querySelector('form.signup input[type="text"]').value;
  var signupPincode = document.querySelector('form.signup input[type="password"][placeholder="Confirm Password"]').value;

  if (!validateEmail(signupEmail)) {
      showAlert('Please enter a valid email address.');
      return false;
  }

  return true;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}