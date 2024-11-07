// Utility to get token from local storage
function getToken() {
    return localStorage.getItem('token');
}

// Utility to clear token on logout
function clearToken() {
    localStorage.removeItem('token');
}

export { getToken, clearToken };
