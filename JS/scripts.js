const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    // const loginForm = document.getElementById('loginForm');
  
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
  
    const email_or_phone = document.getElementById('registerEmailOrPhone').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
  
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_or_phone, username, password }),
      });
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error during registration:', error);
    }
  });
  
//   loginForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
  
//     const username = document.getElementById('loginUsername').value;
//     const password = document.getElementById('loginPassword').value;
  
//     try {
//       const response = await fetch(`${API_BASE_URL}/register`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });
  
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   });
  
  });
  