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

            const responseData = await response.json();
            console.log('Order submitted successfully:', responseData);
        } catch (error) {
            console.error('Error submitting order:', error);
        }
    });
});