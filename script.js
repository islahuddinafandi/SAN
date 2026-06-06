// Tab menu
function showTab(name, btn) {
  document.querySelectorAll('.menu-grid').forEach(el => el.classList.add('hidden'));
  document.getElementById('tab-' + name).classList.remove('hidden');
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// Mobile navbar toggle
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Booking → langsung ke WhatsApp
function handleBooking(e) {
  e.preventDefault();
  const nama = document.querySelector('input[placeholder="Masukkan nama kamu"]').value;
  const wa = document.querySelector('input[placeholder="+62 812 ..."]').value;
  const layanan = document.querySelectorAll('select')[0].value;
  const tanggal = document.querySelector('input[type="date"]').value;
  const jam = document.querySelectorAll('select')[1].value;

  if (!nama || !wa) {
    alert('Mohon isi nama dan nomor WhatsApp terlebih dahulu.');
    return;
  }

  const nomorToko = '6281188881125'; // ganti nomor WA toko

  const pesan =
    `Halo SAN! Saya ingin booking 🙏\n\n` +
    `👤 Nama: ${nama}\n` +
    `📱 WhatsApp: ${wa}\n` +
    `✂️ Layanan: ${layanan}\n` +
    `📅 Tanggal: ${tanggal}\n` +
    `🕐 Jam: ${jam}\n\n` +
    `Mohon konfirmasinya, terima kasih!`;

  const url = `https://wa.me/${nomorToko}?text=${encodeURIComponent(pesan)}`;
  window.location.href = url; // ← pakai ini, bukan window.open
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});