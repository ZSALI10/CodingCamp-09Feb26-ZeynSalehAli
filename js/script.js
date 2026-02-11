// Function untuk Real-time Clock
function updateTime() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    
    // Format waktu agar sesuai lokal Indonesia
    const timeString = now.toLocaleDateString('id-ID', options);
    document.getElementById("current-time").textContent = timeString;
}

// Update waktu setiap 1 detik (1000ms)
setInterval(updateTime, 1000);
updateTime(); // Jalankan langsung saat load agar tidak menunggu 1 detik

// Menangani Submit Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    // Mencegah halaman reload
    event.preventDefault();

    // 1. Ambil nilai dari input
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    // 2. Masukkan nilai ke dalam elemen Result Box
    document.getElementById('sender-full-name').textContent = nama;
    document.getElementById('sender-birth-date').textContent = tanggal;
    document.getElementById('sender-gender').textContent = gender;
    document.getElementById('sender-messages').textContent = pesan;

    // 3. Logika Tampilan (UI Logic)
    // Sembunyikan "Empty State" dan Tampilkan "Result Container"
    document.getElementById('empty-state').style.display = 'none';
    const resultContainer = document.getElementById('result-container');
    resultContainer.classList.remove('hidden');
    
    // Animasi simple (fade in effect via CSS styling flow)
    resultContainer.style.opacity = 0;
    setTimeout(() => {
        resultContainer.style.transition = 'opacity 0.5s';
        resultContainer.style.opacity = 1;
    }, 50);

    // Reset Form (Opsional, jika ingin form bersih setelah submit)
    // contactForm.reset(); 
    
    // Alert sukses sederhana
    alert("Terima kasih " + nama + ", pesan anda telah kami terima!");
});