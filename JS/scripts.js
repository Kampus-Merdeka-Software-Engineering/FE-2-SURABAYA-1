const API_BASE_URL = 'https://worrisome-fatigues-newt.cyclic.app';

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
      const customPopup = document.getElementById('customPopup');
      const popupContent = document.getElementById('popupContent');

      if (response.ok) {
          popupContent.innerText = 'Registration successful!';
          customPopup.style.backgroundColor = '#4CAF50'; 
          customPopup.style.display = 'block';

          setTimeout(() => {
              window.location.href = '../HTML/login.html';
          }, 5000);
      } else {

          popupContent.innerText = `Registration failed: ${data.message}`;
          customPopup.style.backgroundColor = '#f44336';
          customPopup.style.display = 'block';

          setTimeout(() => {
            customPopup.style.display = 'none';
        }, 3000);
      }
    } catch (error) {
        console.error('Error during registration:', error);
  
        popupContent.innerText = 'Error during registration. Please try again.';
        customPopup.style.backgroundColor = '#f44336'; 
        customPopup.style.display = 'block';

        setTimeout(() => {
          customPopup.style.display = 'none';
      }, 3000);
    }
  });
  
  });
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("registerPassword");
    var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}