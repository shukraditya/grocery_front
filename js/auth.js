// Define API base URL
const API_URL = 'http://localhost:3000/api/auth'; // Adjust based on your backend server URL

// Login function
async function loginUser(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // Store the token in local storage
            localStorage.setItem('token', data.token);
            alert('Login successful');
            window.location.href = 'product.html'; // Redirect to product page
        } else {
            // Handle login error
            alert(data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again.');
    }
}

//signup function
async function signupUser(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const type = document.getElementById('type').value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password, type }),
        });

        const data = await response.json();

        if (response.ok) {
            alert('Signup successful! You can now log in.');
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            // Handle signup error
            alert(data.message || 'Signup failed. Please try again.');
        }
    } catch (error) {
        console.error('Error signing up:', error);
        alert('An error occurred. Please try again.');
    }
}

// Attach event listener to signup form submission
document.getElementById('signupForm').addEventListener('submit', signupUser);
di
// Attach event listener to form submission
document.getElementById('loginForm').addEventListener('submit', loginUser);
