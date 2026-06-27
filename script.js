/* ══════════════════════════════════════════════
   Chamuel & Co. — Main Scripts
   ══════════════════════════════════════════════ */

// ─── HEADER SCROLL STATE ───────────────────────
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ─── MOBILE DRAWER ────────────────────────────
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
const drawerClose = document.getElementById('drawerClose');

burger.addEventListener('click', () => drawer.classList.add('open'));
drawerClose.addEventListener('click', () => drawer.classList.remove('open'));
drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => drawer.classList.remove('open'));
});

// ─── SCROLL REVEAL ────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
    setTimeout(() => el.classList.add('in'), delay);
    revealObserver.unobserve(el);
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─── HERO CANVAS — PARTICLE FIELD ─────────────
const canvas = document.getElementById('heroCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 1.2 + 0.2;
      this.vx = (Math.random() - 0.5) * 0.18;
      this.vy = (Math.random() - 0.5) * 0.18;
      this.alpha = Math.random() * 0.5 + 0.1;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.gold = Math.random() > 0.65;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += this.pulseSpeed;
      const a = this.alpha * (0.6 + 0.4 * Math.sin(this.pulse));
      if (this.x < -4 || this.x > W + 4 || this.y < -4 || this.y > H + 4) this.reset();
      return a;
    }
    draw(a) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = this.gold
        ? `rgba(201,169,110,${a})`
        : `rgba(255,255,255,${a * 0.4})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 140 }, () => new Particle());
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => p.draw(p.update()));
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize, { passive: true });
  init();
  draw();
}

// ─── SMOOTH ANCHOR SCROLL ─────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ─── COUNTER ANIMATION ────────────────────────
function animateCounter(el, target, suffix = '') {
  const dur  = 1800;
  const step = 16;
  const inc  = target / (dur / step);
  let current = 0;
  const isInt = Number.isInteger(target);
  const timer = setInterval(() => {
    current = Math.min(current + inc, target);
    el.textContent = (isInt ? Math.round(current) : current.toFixed(0)) + suffix;
    if (current >= target) clearInterval(timer);
  }, step);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const nums = entry.target.querySelectorAll('.stat-num');
    nums.forEach(el => {
      const raw = el.textContent.replace(/[^0-9]/g, '');
      const suffix = el.textContent.replace(/[0-9]/g, '').replace('.', '');
      animateCounter(el, parseInt(raw), suffix);
    });
    statObserver.unobserve(entry.target);
  });
}, { threshold: 0.5 });

const statsEl = document.querySelector('.about-stats');
if (statsEl) statObserver.observe(statsEl);

// ─── CURSOR GLOW (desktop only) ───────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  Object.assign(glow.style, {
    position: 'fixed', pointerEvents: 'none', zIndex: '9999',
    width: '300px', height: '300px', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(201,169,110,.04) 0%, transparent 70%)',
    transform: 'translate(-50%, -50%)',
    transition: 'opacity .3s',
    top: '0', left: '0',
  });
  document.body.appendChild(glow);

  let mx = 0, my = 0, cx = 0, cy = 0;
  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });
  (function track() {
    cx += (mx - cx) * 0.08;
    cy += (my - cy) * 0.08;
    glow.style.left = cx + 'px';
    glow.style.top  = cy + 'px';
    requestAnimationFrame(track);
  })();
}
