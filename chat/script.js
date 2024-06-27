// script.js

// Function to validate the form and redirect to home page on success
function validateForm() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();
    var errorMsg = document.getElementById('error-msg');

    // Simple validation
    if (username === '' || password === '') {
        errorMsg.textContent = 'Please fill out all fields.';
        return false; // Prevent form submission
    }

    // Mock authentication (replace with actual authentication logic)
    if (username === 'Gowtham' && password === 'Gowtham15') {
        // Clear error message if validation succeeds
        errorMsg.textContent = '';

        // Redirect to home page or perform any other action
        window.location.href = 'home.html'; // Replace with your home page URL
        return false; // Prevent form submission (optional)
    } else {
        // Display error message for invalid credentials
        errorMsg.textContent = 'password is incorrect';
        return false; // Prevent form submission
    }
}
