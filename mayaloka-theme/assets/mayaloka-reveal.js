document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('.mayaloka-section, .mayaloka-section .mayaloka-reveal, .mayaloka-reveal');
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-visible', entry.isIntersecting);
      });
    },
    { threshold: 0.15 }
  );

  els.forEach((el) => {
    if (el.classList.contains('mayaloka-section')) {
      el.classList.add('mayaloka-reveal');
    }

    io.observe(el);
  });
});
