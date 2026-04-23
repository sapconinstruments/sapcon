import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fade-up, .fade-left, .fade-right');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export function useCounterAnimation(targetValue: number, isVisible: boolean) {
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isVisible || !countRef.current) return;

    const duration = 2000;
    const start = Date.now();
    const isDecimal = targetValue % 1 !== 0;

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * targetValue;

      if (countRef.current) {
        countRef.current.textContent = isDecimal
          ? current.toFixed(1)
          : Math.floor(current).toString();
      }

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else if (countRef.current) {
        countRef.current.textContent = isDecimal
          ? targetValue.toFixed(1)
          : targetValue.toString();
      }
    };

    requestAnimationFrame(tick);
  }, [isVisible, targetValue]);

  return countRef;
}
