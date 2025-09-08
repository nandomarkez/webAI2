function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    import { USERNAME, PASSWORD } from './config/credentials.js';

    if (usernameInput === USERNAME && passwordInput === PASSWORD) {
        alert('Login successful!');
        // Redirect to another page or perform further actions
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    login();
});