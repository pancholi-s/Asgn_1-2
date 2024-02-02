function showAlert(message) {
    var alertBox = document.getElementById('alertBox');
    alertBox.innerHTML = message;
    alertBox.style.display = 'block';
    setTimeout(function() {
        alertBox.style.display = 'none';
    }, 3000); // Hide alert after 3 seconds
}

function validateLogin() {
    var loginEmail = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;

    // You can add further validation if needed
    return true;
}

function validateSignUp() {
    var signupEmail = document.getElementById('signupEmail').value;
    var signupPincode = document.getElementById('signupPincode').value;

    if (!validateEmail(signupEmail)) {
        showAlert('Please enter a valid email address.');
        return false;
    }

    if (!validatePincode(signupPincode)) {
        showAlert('Please enter a valid pincode.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePincode(pincode) {
    return /^\d{6}$/.test(pincode);
}
