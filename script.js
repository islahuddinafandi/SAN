function showTab(name, btn) {
  document.querySelectorAll('.menu-grid').forEach(el => el.classList.add('hidden'));
  document.getElementById('tab-' + name).classList.remove('hidden');
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

function handleBooking() {
  var nama = document.getElementById('input-nama').value;
  var wa = document.getElementById('input-wa').value;
  var layanan = document.getElementById('input-layanan').value;
  var tanggal = document.getElementById('input-tanggal').value;
  var jam = document.getElementById('input-jam').value;

  if (!nama || !wa) {
    alert('Mohon isi nama dan nomor WhatsApp terlebih dahulu.');
    return;
  }

  var pesan = 'Halo SAN! Saya ingin booking\n\nNama: ' + nama + '\nWA: ' + wa + '\nLayanan: ' + layanan + '\nTanggal: ' + tanggal + '\nJam: ' + jam + '\n\nMohon konfirmasinya, terima kasih!';
  window.location.href = 'https://wa.me/6281188881125?text=' + encodeURIComponent(pesan);
}

document.querySelectorAll('a[href^="#"]').forEach(function(a) {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});
