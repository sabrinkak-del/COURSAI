// Auth Modal Logic
const modal = document.getElementById('authModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const closeBtn = document.querySelector('.close-modal');
const formContainer = document.getElementById('authFormContainer');

const loginFormHtml = `
  <div class="auth-form">
    <h2>התחברות</h2>
    <form id="loginForm">
      <div class="form-group">
        <label>כתובת אימייל</label>
        <input type="email" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label>סיסמה</label>
        <input type="password" placeholder="••••••••" required>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%">כניסה</button>
    </form>
  </div>
`;

const signupFormHtml = `
  <div class="auth-form">
    <h2>הרשמה ל-COURSIL</h2>
    <form id="signupForm">
      <div class="form-group">
        <label>שם מלא</label>
        <input type="text" placeholder="ישראל ישראלי" required>
      </div>
      <div class="form-group">
        <label>כתובת אימייל</label>
        <input type="email" placeholder="you@example.com" required>
      </div>
      <div class="form-group">
        <label>סיסמה</label>
        <input type="password" placeholder="••••••••" required>
      </div>
      <button type="submit" class="btn btn-primary" style="width: 100%">צור חשבון</button>
    </form>
  </div>
`;

function openModal(type) {
    formContainer.innerHTML = type === 'login' ? loginFormHtml : signupFormHtml;
    modal.style.display = 'block';

    const form = formContainer.querySelector('form');
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('זוהי גרסת הדגמה. המערכת עדיין אינה מחוברת לשרת.');
        modal.style.display = 'none';
    });
}

if (loginBtn) loginBtn.addEventListener('click', () => openModal('login'));
if (signupBtn) signupBtn.addEventListener('click', () => openModal('signup'));

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Progress Bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

console.log('COURSIL AI Platform is active and local-ready!');
