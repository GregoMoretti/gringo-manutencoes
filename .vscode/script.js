
//script.js – Gringo Manutenções


//MENU HAMBURGUER
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
 
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
 
function closeMenu() {
  mobileMenu.classList.remove('open');
}
 
// Fecha o menu ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    mobileMenu.classList.remove('open');
  }
});
 
// ── SCROLL REVEAL ───────────────────────────────
const reveals = document.querySelectorAll('.reveal');
 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Delay escalonado: cada card aparece um pouquinho depois do anterior!
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
 
reveals.forEach(el => observer.observe(el));
 
// ── HEADER: sombra ao rolar ─────────────────────
const header = document.querySelector('header');
 
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.style.boxShadow = '0 4px 24px rgba(0,0,0,0.35)';
  } else {
    header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.25)';
  }
});
 
// ── SMOOTH SCROLL para links do menu ───────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});