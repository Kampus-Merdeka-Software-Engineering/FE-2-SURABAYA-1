const API_BASE_URL = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Mencegah form untuk melakukan pengiriman langsung

        // Ambil nilai dari input
        const firstName = document.querySelector('input[name="firstName"]').value;
        const lastName = document.querySelector('input[name="lastName"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const mobileNumber = document.querySelector('input[name="mobileNumber"]').value;
        const message = document.querySelector('textarea').value;

        // Lakukan validasi, misalnya periksa apakah semua input terisi
        if (firstName && lastName && email && mobileNumber && message) {
            // Kirim data ke server atau lakukan tindakan lain sesuai kebutuhan
            console.log('Data yang akan dikirim:', { firstName, lastName, email, mobileNumber, message });

            // Di sini, Anda dapat menambahkan logika untuk mengirim data ke server menggunakan AJAX atau metode lainnya.
            // Contoh menggunakan fetch:
            
            try {
                const response = await fetch(`${API_BASE_URL}/contact-us`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ firstName, lastName, email, mobileNumber, message }),
                });
        
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.error || 'Failed to submit form');
                }
        
                return await response.json();
            } catch (error) {
                throw error;
            }
            

            // Di sini, Anda dapat menambahkan logika untuk menampilkan pesan sukses atau kesalahan kepada pengguna.
        } else {
            alert('Mohon lengkapi semua input sebelum mengirim pesan.');
        }
    });
});
