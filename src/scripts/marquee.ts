// Scrollable logo strip: slow auto drift, user can swipe/drag/scroll/use arrows at any time.
// The strip holds the logos twice, so wrapping scrollLeft by half the width is seamless.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const SPEED = 28; // px per second
const IDLE_MS = 4000; // pause after any user interaction

document.querySelectorAll<HTMLElement>('.mj-marquee--manual').forEach((el) => {
  const half = () => el.scrollWidth / 2;
  const wrap = () => {
    const h = half();
    if (!h) return;
    if (el.scrollLeft >= h) el.scrollLeft -= h;
    else if (el.scrollLeft < 1) el.scrollLeft += h;
  };
  // Reduced motion: single set (duplicates hidden by CSS), plain manual scrolling without looping
  if (!reduced) {
    // start slightly inside so scrolling backwards can wrap too
    el.scrollLeft = 1;
    el.addEventListener('scroll', wrap, { passive: true });
  }

  let pauseUntil = 0;
  let hover = false;
  let focus = false;
  let visible = false;
  const touch = () => (pauseUntil = performance.now() + IDLE_MS);
  for (const ev of ['pointerdown', 'touchstart', 'wheel', 'keydown']) el.addEventListener(ev, touch, { passive: true });
  el.addEventListener('mouseenter', () => (hover = true));
  el.addEventListener('mouseleave', () => (hover = false));
  el.addEventListener('focusin', () => (focus = true));
  el.addEventListener('focusout', () => (focus = false));

  // Mouse drag (touch and trackpad already scroll natively)
  let dragging = false;
  let dragStartX = 0;
  let dragStartLeft = 0;
  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    dragging = true;
    dragStartX = e.clientX;
    dragStartLeft = el.scrollLeft;
    el.classList.add('is-dragging');
    el.setPointerCapture(e.pointerId);
  });
  el.addEventListener('pointermove', (e) => {
    if (dragging) el.scrollLeft = dragStartLeft - (e.clientX - dragStartX);
  });
  const stopDrag = () => {
    dragging = false;
    el.classList.remove('is-dragging');
    touch();
  };
  el.addEventListener('pointerup', stopDrag);
  el.addEventListener('pointercancel', stopDrag);

  const nav = el.nextElementSibling;
  const step = (dir: number) => {
    touch();
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: reduced ? 'auto' : 'smooth' });
  };
  nav?.querySelector('[data-marquee-prev]')?.addEventListener('click', () => step(-1));
  nav?.querySelector('[data-marquee-next]')?.addEventListener('click', () => step(1));

  if (reduced || !('IntersectionObserver' in window)) return;
  new IntersectionObserver((entries) => (visible = entries[0].isIntersecting)).observe(el);

  let last = performance.now();
  let acc = 0;
  const tick = (now: number) => {
    const dt = Math.min(now - last, 100);
    last = now;
    if (visible && !hover && !focus && now > pauseUntil && !document.hidden) {
      acc += (SPEED * dt) / 1000;
      const whole = Math.floor(acc);
      if (whole >= 1) {
        el.scrollLeft += whole;
        acc -= whole;
      }
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
});
