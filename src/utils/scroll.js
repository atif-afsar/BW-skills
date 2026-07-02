let activeAnimationFrame = null;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const offset = -96;

  window.requestAnimationFrame(() => {
    const startY = window.scrollY;
    const targetY = Math.max(
      0,
      Math.min(
        element.getBoundingClientRect().top + window.scrollY + offset,
        document.documentElement.scrollHeight - window.innerHeight
      )
    );

    const distance = targetY - startY;
    if (Math.abs(distance) < 2) return;

    if (activeAnimationFrame) {
      window.cancelAnimationFrame(activeAnimationFrame);
    }

    const duration = 700;
    const startTime = performance.now();

    const step = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startY + distance * easedProgress);

      if (progress < 1) {
        activeAnimationFrame = window.requestAnimationFrame(step);
      } else {
        activeAnimationFrame = null;
      }
    };

    activeAnimationFrame = window.requestAnimationFrame(step);
  });
}
