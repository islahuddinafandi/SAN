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

// Booking handler
function handleBooking() {
  const nama = document.querySelector('input[placeholder="Masukkan nama kamu"]').value;
  const wa = document.querySelector('input[placeholder="+62 812 ..."]').value;
  if (!nama || !wa) {
    alert('Mohon isi nama dan nomor WhatsApp terlebih dahulu.');
    return;
  }
  alert('Terima kasih, ' + nama + '! Booking kamu sudah diterima. Kami akan menghubungi kamu via WhatsApp.');
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
