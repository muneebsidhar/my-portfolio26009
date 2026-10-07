const $ = (id) => document.getElementById(id);
const page = document.body.dataset.page;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
$('year').textContent = new Date().getFullYear();

/* ---------- EDIT YOUR SKILLS HERE ---------- */
const dev = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
const skills = [
  { name: 'C++',            level: 95, label: 'Expert',   group: 'Programming', icon: dev + 'cplusplus/cplusplus-original.svg' },
  { name: 'Python',         level: 88, label: 'Advanced', group: 'Programming', icon: dev + 'python/python-original.svg' },
  { name: 'OOP',            level: 93, label: 'Expert',   group: 'Programming', icon: 'svg:cube' },
  { name: 'Arduino',        level: 92, label: 'Expert',   group: 'Hardware',    icon: dev + 'arduino/arduino-original.svg' },
  { name: 'Arduino IDE',    level: 90, label: 'Expert',   group: 'Hardware',    icon: 'svg:code' },
  { name: 'Digital Logic (DLD)', level: 90, label: 'Expert', group: 'Hardware',  icon: 'svg:chip' },
  { name: 'Front-End',      level: 90, label: 'Expert',   group: 'Web',         icon: 'svg:web' },
  { name: 'Back-End',       level: 85, label: 'Advanced', group: 'Web',         icon: 'svg:server' },
  { name: 'HTML',           level: 95, label: 'Expert',   group: 'Web',         icon: dev + 'html5/html5-original.svg' },
  { name: 'CSS',            level: 90, label: 'Expert',   group: 'Web',         icon: dev + 'css3/css3-original.svg' },
  { name: 'JavaScript',     level: 88, label: 'Advanced', group: 'Web',         icon: dev + 'javascript/javascript-original.svg' },
  { name: 'AI',             level: 60, label: 'Learner',  group: 'AI and Security', icon: 'svg:ai' },
  { name: 'AI for Brainstorming', level: 65, label: 'Learner', group: 'AI and Security', icon: 'svg:ai' },
  { name: 'Cyber Security', level: 45, label: 'Beginner', group: 'AI and Security', icon: 'svg:shield' },
];
/* ---------- EDIT YOUR CERTIFICATES HERE (preview images live in public/images) ---------- */
const certificates = [
  { title: 'AI For Everyone', issuer: 'DeepLearning.AI, via Coursera', date: '06 Oct 2026', img: 'cert-ai-everyone.jpg', link: 'https://coursera.org/verify/GKFH8S18XHQZ' },
  { title: 'AI for Brainstorming and Planning', issuer: 'Google, via Coursera', date: '06 Oct 2026', img: 'cert-ai-brainstorming.jpg', link: 'https://coursera.org/verify/9RV7P5URNV3B' },
  { title: 'Foundations of Cybersecurity', issuer: 'Google, via Coursera', date: '02 Sep 2026', img: 'cert-cybersecurity.jpg', link: 'https://coursera.org/verify/Z7FDSUBSNFAY' },
];
/* ---------- EDIT YOUR PROJECTS HERE (image files live in public/images) ---------- */
const projects = [
  { id: 'arduino', title: 'Smart Attendance System',      group: 'Arduino', img: 'rfid.svg',       text: 'Students tap an RFID card on a reader and an Arduino records their attendance automatically, replacing the paper register.', link: '#' },
  { id: 'car',     title: 'Light Following Car',          group: 'Arduino', img: 'car.svg',        text: 'A small robot car that senses a light source with Arduino and steers itself toward it.', link: '#' },
  { id: 'parking', title: 'Auto Parking System',          group: 'Arduino', img: 'parking.svg',    text: 'An Arduino-controlled parking system that detects vehicles and manages parking automatically.', link: '#' },
  { id: 'circuit', title: 'More Arduino Projects',        group: 'Arduino', img: 'breadboard.svg', text: 'A growing collection of sensor, LED and motor projects programmed in the Arduino IDE.', link: '#' },
  { id: 'dld',     title: 'Smart Security Laser Alarm',   group: 'DLD',     img: 'laser.svg',      text: 'A security alarm built from logic gates that sounds when a laser beam is interrupted.', link: '#' },
  { id: 'gates',   title: 'Logic Gate Projects',          group: 'DLD',     img: 'logic.svg',      text: 'Digital circuits designed from AND, OR and NOT gates and tested as working hardware.', link: '#' },
  { id: 'cpp',     title: 'Snake Game',                   group: 'C++',     img: 'snake.svg',      text: 'The classic snake game written in C++, with score tracking and growing difficulty.', link: '#' },
  { id: 'exam',    title: 'Exam System',                  group: 'C++',     img: 'code-cpp.svg',   text: 'A C++ program that conducts exams, checks answers and reports the final result.', link: '#' },
  { id: 'oop',     title: 'Car Racing Game',              group: 'OOP',     img: 'code-cpp.svg',   text: 'A racing game built around object-oriented design, with classes for the cars, track and game flow.', link: '#' },
  { id: 'python',  title: 'Python Automation',            group: 'Python',  img: 'code-python.svg', text: 'Python scripts that automate repetitive tasks and save time.', link: '#' },
  { id: 'web',     title: 'Student Career Guidance Portal', group: 'Web',   img: 'web.svg',        text: 'A website that helps students explore careers and choose a path that fits their interests.', link: '#' },
  { id: 'store',   title: 'Online Store',                 group: 'Web',     img: 'store.svg',      text: 'An online shopping website where visitors browse products and place orders.', link: '#' },
  { id: 'site',    title: 'Personal Portfolio Website',   group: 'Web',     img: 'web.svg',        text: 'This site: five responsive pages with HTML, CSS and JavaScript, plus a Node.js server for the contact form.', link: '#' },
];
/* --------------------------------------------------------------------------- */

const svgs = {
  cube: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/>',
  chip: '<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  web: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/>',
  server: '<rect x="3" y="4" width="18" height="6" rx="1"/><rect x="3" y="14" width="18" height="6" rx="1"/><path d="M7 7h.01M7 17h.01"/>',
  ai: '<path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
};
const iconHtml = (i) => i.startsWith('svg:')
  ? `<svg viewBox="0 0 24 24" aria-hidden="true">${svgs[i.slice(4)]}</svg>`
  : `<img src="${i}" alt="" loading="lazy">`;

function setupFilter(items, listEl, render) {
  listEl.innerHTML = items.map(render).join('');
  const box = $('filters');
  ['All', ...new Set(items.map((x) => x.group))].forEach((g, i) => {
    const b = document.createElement('button');
    b.className = 'chip'; b.textContent = g; b.setAttribute('aria-pressed', i === 0);
    b.addEventListener('click', () => {
      box.querySelectorAll('.chip').forEach((x) => x.setAttribute('aria-pressed', x === b));
      listEl.querySelectorAll('li').forEach((li) => { li.hidden = g !== 'All' && li.dataset.group !== g; });
    });
    box.appendChild(b);
  });
}

if (page === 'skills') {
  const grid = $('skill-grid');
  setupFilter(skills, grid, (s) => `<li class="skill-card" data-group="${s.group}">
    <div class="skill-top"><span class="icon">${iconHtml(s.icon)}</span><div><h3>${s.name}</h3><small>${s.label} · ${s.level}%</small></div></div>
    <div class="bar" role="img" aria-label="${s.name} ${s.level} percent"><span data-level="${s.level}"></span></div></li>`);
  const fill = () => grid.querySelectorAll('.bar span').forEach((el) => { el.style.width = el.dataset.level + '%'; });
  if (reduceMotion || !('IntersectionObserver' in window)) fill();
  else new IntersectionObserver((e, o) => { if (e[0].isIntersecting) { fill(); o.disconnect(); } }, { threshold: 0.1 }).observe(grid);
}

/* Certificates (skills and home pages) */
const certGrid = $('cert-grid');
if (certGrid) {
  certGrid.innerHTML = certificates.map((c) => `<li class="project-card cert reveal">
    <a href="${c.link}" target="_blank" rel="noopener"><img src="images/${c.img}" alt="Certificate: ${c.title}" loading="lazy"></a>
    <div class="body"><span class="tag">${c.date}</span><h3>${c.title}</h3><p>${c.issuer}</p><a href="${c.link}" target="_blank" rel="noopener">Verify certificate</a></div></li>`).join('');
}

if (page === 'projects') {
  setupFilter(projects, $('project-grid'), (p) => `<li class="project-card" id="${p.id}" data-group="${p.group}">
    <a href="${p.link}"><img src="images/${p.img}" alt="${p.title}" loading="lazy"></a>
    <div class="body"><span class="tag">${p.group}</span><h3>${p.title}</h3><p>${p.text}</p><a href="${p.link}">View project</a></div></li>`);
  if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
}

if (page === 'home') {
  /* Skills marquee (list is doubled so the loop is seamless) */
  const row = skills.map((s) => `<span>${iconHtml(s.icon)}${s.name}</span>`).join('');
  $('marquee').innerHTML = row + row;

  /* Typing effect */
  const roles = ['Computer Science student', 'Full-stack web developer', 'C++ and Python programmer', 'Arduino and DLD project builder'];
  const typed = $('typed');
  if (reduceMotion) typed.textContent = roles[0];
  else {
    let r = 0, c = 0, del = false;
    (function tick() {
      const w = roles[r];
      typed.textContent = w.slice(0, c);
      if (!del && c === w.length) { del = true; return setTimeout(tick, 1500); }
      if (del && c === 0) { del = false; r = (r + 1) % roles.length; }
      c += del ? -1 : 1;
      setTimeout(tick, del ? 40 : 80);
    })();
  }

  /* Photo tilt, and initials if the image is missing */
  const photo = $('photo'), img = photo.querySelector('img');
  img.addEventListener('error', () => { img.outerHTML = '<div class="fallback">MS</div>'; });
  if (!reduceMotion) {
    photo.addEventListener('mousemove', (e) => {
      const b = photo.getBoundingClientRect();
      const x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5;
      photo.lastElementChild.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
    });
    photo.addEventListener('mouseleave', () => { photo.lastElementChild.style.transform = ''; });
  }

  /* Count-up numbers */
  const countObs = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count; let n = 0;
    countObs.unobserve(el);
    if (reduceMotion) return (el.textContent = end);
    const step = setInterval(() => { el.textContent = ++n; if (n >= end) clearInterval(step); }, 1100 / end);
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach((el) => countObs.observe(el));
}

/* Scroll reveal with a small stagger */
const revealEls = document.querySelectorAll('.reveal');
if (!('IntersectionObserver' in window) || reduceMotion) revealEls.forEach((el) => el.classList.add('in'));
else {
  const io = new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  revealEls.forEach((el, i) => { el.style.setProperty('--d', (i % 3) * 0.12 + 's'); io.observe(el); });
}

/* Current page in nav */
document.querySelectorAll('nav a').forEach((a) => {
  const here = location.pathname.split('/').pop() || 'index.html';
  if (a.getAttribute('href') === here) a.setAttribute('aria-current', 'page');
});

/* Theme toggle (remembered) */
const root = document.documentElement;
try { root.dataset.theme = localStorage.getItem('theme') || 'dark'; } catch {}
$('theme-toggle').addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  try { localStorage.setItem('theme', root.dataset.theme); } catch {}
});

/* Scroll progress */
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('progress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100 + '%';
}, { passive: true });

/* Contact form */
const form = $('contact-form');
if (form) {
  const status = $('form-status');
  const say = (t, c) => { status.textContent = t; status.className = c || ''; };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(form));
    if (!d.name.trim() || !d.message.trim()) return say('Please enter your name and a message.', 'error');
    if (!/^\S+@\S+\.\S+$/.test(d.email)) return say('Please enter a valid email address.', 'error');
    say('Sending...');
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(d) });
      if (!res.ok) throw new Error();
      form.reset(); say('Message sent. Thank you!');
    } catch { say('Could not send. Please email me at muneebsidhar@gmail.com instead.', 'error'); }
  });
}
