// Theme toggle and mobile menu. The only page script besides the inline theme bootstrap.
const root = document.documentElement;

const themeBtn = document.getElementById('theme-btn');
themeBtn?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const dark = current ? current === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const next = dark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  themeBtn.setAttribute('aria-pressed', String(next === 'dark'));
  try {
    localStorage.setItem('mmj-theme', next);
  } catch {
    /* storage unavailable: theme applies for this visit only */
  }
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('site-menu');
function setMenu(open: boolean) {
  menu?.classList.toggle('is-open', open);
  menuBtn?.setAttribute('aria-expanded', String(open));
}
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menuBtn?.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    menuBtn.focus();
  }
});
