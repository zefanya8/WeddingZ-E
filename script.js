// Dynamic Nama Tamu
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nama = urlParams.get('nama') || 'Bapak/Ibu/Saudara/i';
    document.getElementById('dynamicNama').textContent = nama;
});

// Copy Rekening
function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert('Nomor rekening berhasil disalin!'))
        .catch(err => console.error('Gagal menyalin:', err));
}

// Form Ucapan & RSVP
document.getElementById('formUcapan').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const pesan = document.getElementById('pesan').value;
    const kehadiran = document.getElementById('kehadiran').value;

    db.collection('ucapan').add({
        nama: nama,
        pesan: pesan,
        kehadiran: kehadiran,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        document.getElementById('formUcapan').reset();
        alert('Ucapan berhasil dikirim!');
    });
});

// Tampilkan Ucapan Realtime
db.collection('ucapan').orderBy('timestamp').onSnapshot(snapshot => {
    let html = '';
    snapshot.forEach(doc => {
        const data = doc.data();
        html += `
            <div class="ucapan-item">
                <h4>${data.nama}</h4>
                <p>${data.pesan}</p>
                <small>Status: ${data.kehadiran}</small>
            </div>
        `;
    });
    document.getElementById('daftarUcapan').innerHTML = html;
});