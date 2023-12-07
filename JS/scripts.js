const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
  
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email_or_phone = document.getElementById('registerEmailOrPhone').value;
    const password = document.getElementById('registerPassword').value;
  
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_or_phone,password }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  });
  
  });
  