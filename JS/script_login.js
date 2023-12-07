const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email_or_phone = document.getElementById('loginEmailOrPhone').value;
    const password = document.getElementById('loginPassword').value;
  
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_or_phone, password }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during login:', error);
    }
  });
  
  });
  