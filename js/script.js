// 1. WELCOME GREETING (Workflow Step 4)
// Meminta nama user saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Halo! Siapakah nama Anda?", "Guest");
    
    // Jika user klik cancel atau kosong, set default
    if (userName === null || userName.trim() === "") {
        userName = "Guest";
    }

    // Masukkan nama ke dalam elemen HTML
    document.getElementById("user-name").innerText = userName;

    // Menjalankan jam real-time
    updateTime();
    setInterval(updateTime, 1000);
});

// Fungsi Update Jam
function updateTime() {
    const now = new Date();
    document.getElementById("current-time").innerText = now.toUTCString();
}

// 2. FORM VALIDATION & SUBMISSION (Workflow Step 5)
function validateForm() {
    // Ambil nilai dari input
    const nama = document.forms["messageForm"]["nama"].value;
    const tanggal = document.forms["messageForm"]["tanggal"].value;
    const gender = document.forms["messageForm"]["gender"].value;
    const pesan = document.forms["messageForm"]["pesan"].value;

    // Validasi: Cek apakah ada yang kosong
    if (nama == "" || tanggal == "" || gender == "" || pesan == "") {
        alert("Mohon lengkapi semua data formulir!");
        return false; // Mencegah submit
    }

    // Jika valid, tampilkan data di result box
    showResult(nama, tanggal, gender, pesan);
    
    // Mencegah form reload halaman (default behavior form submit)
    return false; 
}

function showResult(nama, tanggal, gender, pesan) {
    // Sembunyikan text placeholder
    document.getElementById("placeholder-text").style.display = "none";
    
    // Tampilkan box hasil
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";

    // Isi data ke dalam HTML
    document.getElementById("res-nama").innerText = nama;
    document.getElementById("res-tanggal").innerText = tanggal;
    document.getElementById("res-gender").innerText = gender;
    document.getElementById("res-pesan").innerText = pesan;

    alert("Pesan Anda berhasil dikirim! Silakan cek kotak di sebelah kanan (atau bawah pada mobile).");
}