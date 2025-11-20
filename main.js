// 🌸 Smooth Scroll saat klik menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// 📱 Menu Toggle untuk HP
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// 💫 Animasi Skill Bar saat discroll
const skillBars = document.querySelectorAll('.bar div');
function showSkills() {
  const triggerBottom = window.innerHeight * 0.85;
  skillBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerBottom) {
      bar.style.width = bar.getAttribute('data-width') || bar.style.width;
      bar.style.transition = 'width 2s ease';
    }
  });
}
window.addEventListener('scroll', showSkills);

// 📬 Pesan Form
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Terima kasih! Pesanmu sudah terkirim. ✨');
    form.reset();
  });
}