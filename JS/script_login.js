const API_BASE_URL = 'https://be-2-surabaya-1-production.up.railway.app';

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
      if (!data.error) {
        window.location.href = '../HTML/home.html';

        showPopup('Successful login, happy exploring...', true);
      } else {
          showPopup('Your Password is Incorrect', false);
      }
    } catch (error) {
        console.error('Error during login:', error);

        showPopup('An error occurred during login. Please try again.', false);
    }
    });

  function showPopup(message, success) {
  const popupContainer = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');

  popupContent.innerHTML = `<p>${message}</p>`;
  popupContainer.style.backgroundColor = success ? '#4CAF50' : '#f44336';

  popupContainer.style.display = 'block';


  setTimeout(() => {
      popupContainer.style.display = 'none';
  }, 5000);
  }
  
  });
  
  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("loginPassword");
    var showPasswordCheckbox = document.getElementById("showPasswordCheckbox");

    if (showPasswordCheckbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}