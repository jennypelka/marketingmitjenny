// Reel carousel: one phone in the middle, the neighbours teased left and right (faded). The active reel plays
// while the carousel is visible and moves on by itself when it ends. Arrows, dots, clicking a neighbour,
// keyboard arrows and swiping switch manually. With reduced motion nothing autoplays and videos get controls.
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll<HTMLElement>('[data-reels]').forEach((root) => {
  const stage = root.querySelector<HTMLElement>('.reels');
  const slides = [...root.querySelectorAll<HTMLElement>('[data-reel-slide]')];
  const n = slides.length;
  if (!stage || n < 2) return;

  const videos = slides.map((s) => s.querySelector<HTMLVideoElement>('video[data-reel]'));
  const dots = [...root.querySelectorAll<HTMLButtonElement>('[data-reels-dot]')];
  const status = root.querySelector<HTMLElement>('[data-reels-status]');
  const lastRel = new Map<HTMLElement, number>();
  let active = 0;
  let visible = false;

  root.classList.add('reels-wrap--js');
  stage.classList.add('reels--js');

  const relOf = (i: number) => {
    let rel = (((i - active) % n) + n) % n;
    if (rel > n / 2) rel -= n;
    return rel;
  };

  function render() {
    slides.forEach((slide, i) => {
      const rel = relOf(i);
      const old = lastRel.get(slide) ?? rel;
      // A slide wrapping from one far side to the other only fades, it does not fly across the stage
      slide.style.transition = Math.abs(rel - old) > 1 ? 'opacity var(--dur-3) var(--ease-out)' : '';
      lastRel.set(slide, rel);
      slide.style.setProperty('--rel', String(rel));
      slide.dataset.pos = rel === 0 ? 'active' : Math.abs(rel) === 1 ? 'near' : 'far';
      slide.toggleAttribute('inert', rel !== 0);
      slide.setAttribute('aria-hidden', String(rel !== 0));
    });
    dots.forEach((d, i) => (i === active ? d.setAttribute('aria-current', 'true') : d.removeAttribute('aria-current')));
    if (status) status.textContent = `Reel ${active + 1} von ${n}`;
  }

  function sync() {
    videos.forEach((v, i) => {
      if (!v) return;
      if (i === active && visible && !reduced && !document.hidden) {
        v.preload = 'auto';
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }

  function goTo(i: number) {
    active = ((i % n) + n) % n;
    const v = videos[active];
    if (v) v.currentTime = 0;
    render();
    sync();
  }

  videos.forEach((v) => {
    if (!v) return;
    if (reduced) v.controls = true;
    v.addEventListener('ended', () => goTo(active + 1));
    // A reel that cannot load must not block the carousel
    v.addEventListener('error', () => visible && !reduced && setTimeout(() => goTo(active + 1), 1500), true);
  });

  root.querySelector('[data-reels-prev]')?.addEventListener('click', () => goTo(active - 1));
  root.querySelector('[data-reels-next]')?.addEventListener('click', () => goTo(active + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
  slides.forEach((slide, i) => slide.addEventListener('click', () => slide.dataset.pos === 'near' && goTo(i)));
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(active - 1);
    else if (e.key === 'ArrowRight') goTo(active + 1);
  });

  // swipe / drag
  let startX = 0;
  let down = false;
  stage.addEventListener('pointerdown', (e) => {
    down = true;
    startX = e.clientX;
  });
  const end = (e: PointerEvent) => {
    if (!down) return;
    down = false;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 50) goTo(active + (dx < 0 ? 1 : -1));
  };
  stage.addEventListener('pointerup', end);
  stage.addEventListener('pointercancel', () => (down = false));

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        sync();
      },
      { threshold: 0.5 },
    ).observe(stage);
  }
  document.addEventListener('visibilitychange', sync);

  render();
});
