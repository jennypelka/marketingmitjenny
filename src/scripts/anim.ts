// Animation helpers. Scroll-driven CSS does the work where supported; this file adds the
// IntersectionObserver fallback, lazy reel playback and the optional count-up.
const root = document.documentElement;
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollDriven = CSS.supports('animation-timeline: view()');

const animated = document.querySelectorAll<HTMLElement>('[data-anim="rise"], [data-anim="stagger"], [data-anim="scale-in"], [data-progress-line]');

if (!reduced && !scrollDriven && 'IntersectionObserver' in window) {
  root.classList.add('anim-io');
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          el.classList.add('is-in');
          setTimeout(() => el.setAttribute('data-anim-done', ''), 1000);
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );
  animated.forEach((el) => io.observe(el));
}

// Reels: load and play only while visible, pause outside. With reduced motion: no autoplay, show controls.
const videos = document.querySelectorAll<HTMLVideoElement>('video[data-lazy-video]');
if (videos.length) {
  if (reduced) {
    videos.forEach((v) => {
      v.controls = true;
      v.removeAttribute('loop');
    });
  } else if ('IntersectionObserver' in window) {
    const vio = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          const v = target as HTMLVideoElement;
          if (isIntersecting) {
            v.preload = 'auto';
            v.play().catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { threshold: 0.4 },
    );
    videos.forEach((v) => vio.observe(v));
  }
}

// count-up: <span data-anim="count-up" data-count-to="120">120</span>. Only for verified numbers.
document.querySelectorAll<HTMLElement>('[data-anim="count-up"]').forEach((el) => {
  const to = Number(el.dataset.countTo);
  if (reduced || !Number.isFinite(to) || !('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    io.disconnect();
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / 800, 1);
      el.textContent = String(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
  io.observe(el);
});
