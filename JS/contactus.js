const API_BASE_URL = 'https://worrisome-fatigues-newt.cyclic.app';

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); 

        // Ambil nilai dari input
        const firstName = document.querySelector('input[name="firstName"]').value;
        const lastName = document.querySelector('input[name="lastName"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
        const message = document.querySelector('textarea').value;


        if (firstName && lastName && email && mobileNumber && message) {
    
            console.log('Data to be sent:', { firstName, lastName, email, mobileNumber, message });

            try {
                const response = await fetch(`${API_BASE_URL}/contact-us`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ firstName, lastName, email, mobileNumber, message }),
                });
        
                const customPopup = document.getElementById('customPopup');
                const popupContent = document.getElementById('popupContent');
                const popupButtons = document.getElementById('popupButtons');
    
                if (response.ok) {
                    
                    popupContent.innerText = 'Message sent successfully!';
                    popupButtons.innerHTML = `
                        <button onclick="redirectToHome()">Go to Home</button>
                        <button onclick="stayOnPage()">Send message again</button>
                    `;
                } else {
                    const data = await response.json();
                    popupContent.innerText = `Failed to send message: ${data.error || 'Unknown error'}`;
                    popupButtons.innerHTML = `
                        <button onclick="stayOnPage()">OK</button>
                    `;
                }
    
                customPopup.style.display = 'block';
            } catch (error) {
                console.error('Error during sending message:', error);
                popupContent.innerText = 'Error during sending message. Please try again.'; 
                popupButtons.innerHTML = `
                    <button onclick="stayOnPage()">OK</button>
                `;
    
                customPopup.style.display = 'block';
            }
            
        } else {
            alert('Please complete all inputs before sending the message.');
        }
    });
});

function redirectToHome() {
    window.location.href = '../HTML/home.html'; 
}

function stayOnPage() {
    const customPopup = document.getElementById('customPopup');
    customPopup.style.display = 'none';
}
