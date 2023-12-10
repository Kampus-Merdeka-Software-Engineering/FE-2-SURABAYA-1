const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const orderForm = document.getElementById('orderForm');

    orderForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Ambil nilai dari input
        const name = document.getElementById('name').value;
        const TlpNumber = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const location = document.getElementById('destination').value;
        const pickupDate = document.getElementById('start').value;
        const returnDate = document.getElementById('End').value;
        const pickupTime = document.getElementById('time').value;

        try {
            const response = await fetch(`${API_BASE_URL}/order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, TlpNumber, email, location, pickupDate, returnDate, pickupTime }),
            });

            if (response.ok) {
                popupContent.innerText = 'Order submitted successfully! We will process your request.';
                orderPopup.style.display = 'block';
                popupButtons.innerHTML = `
                    <button onclick="redirectToServices()">Go to Services</button>
                    <button onclick="stayOnPage()">Place an order again</button>
                `;
            } else {
                const data = await response.json();
                popupContent.innerText = `Failed to submit order: ${data.error || 'Unknown error'}`;
                orderPopup.style.display = 'block';
                popupButtons.innerHTML = `
                    <button onclick="stayOnPage()">OK</button>
                `;
            }
        } catch (error) {
            console.error('Error submitting order:', error);
            popupContent.innerText = 'Error submitting order. Please try again.';
            orderPopup.style.display = 'block';
            popupButtons.innerHTML = `
                <button onclick="stayOnPage()">OK</button>
            `;
        }
    });
});

function redirectToServices() {
    window.location.href = '../HTML/services_bus.html'; 
}

function stayOnPage() {
    const orderPopup = document.getElementById('orderPopup');
    orderPopup.style.display = 'none';
}