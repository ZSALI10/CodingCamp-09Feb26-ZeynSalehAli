document.addEventListener("DOMContentLoaded", function() {
    // 1. WELCOME GREETING
    let userName = prompt("Halo! Siapakah nama Anda?", "Guest");
    
    if (userName === null || userName.trim() === "") {
        userName = "Guest";
    }

    document.getElementById("user-name").innerText = userName;

    // Menjalankan jam real-time
    updateTime();
    setInterval(updateTime, 1000);

    // 2. SCROLL ANIMATION (Intersection Observer)
    // Setup observer untuk mendeteksi elemen saat masuk viewport
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Animasi mulai saat 10% elemen terlihat
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Saat elemen masuk layar: Tambah class is-visible (muncul)
                entry.target.classList.add('is-visible');
            } else {
                // Saat elemen keluar layar: Hapus class is-visible (hilang/reset)
                // Ini membuat animasi berulang saat scroll atas/bawah
                entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Ambil semua elemen yang punya class 'animate-on-scroll'
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));
});

// Fungsi Update Jam
function updateTime() {
    const now = new Date();
    document.getElementById("current-time").innerText = now.toUTCString();
}

// 3. FORM VALIDATION & SUBMISSION
function validateForm() {
    const nama = document.forms["messageForm"]["nama"].value;
    const tanggal = document.forms["messageForm"]["tanggal"].value;
    const gender = document.forms["messageForm"]["gender"].value;
    const pesan = document.forms["messageForm"]["pesan"].value;

    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        alert("Mohon lengkapi semua data formulir!");
        return false; 
    }

    showResult(nama, tanggal, gender, pesan);
    return false; 
}

function showResult(nama, tanggal, gender, pesan) {
    document.getElementById("placeholder-text").style.display = "none";
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";

    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tanggal").innerText = tanggal;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-pesan").innerText = pesan;

    alert("Pesan Anda berhasil dikirim! Silakan cek kotak di sebelah kanan (atau bawah pada mobile).");
}