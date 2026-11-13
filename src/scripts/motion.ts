// Animaciones de entrada. Todo lo que tenga data-reveal aparece con un fundido suave al hacer scroll.
import { gsap, reduce } from './gsap';

export function initMotion() {
  if (reduce) return;
  gsap.from('[data-hero] span', { y: 24, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.12, delay: 0.1 });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    if (el.offsetParent === null) return; // versión de otro idioma, oculta
    gsap.from(el, { y: 28, opacity: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 94%', once: true } });
  });

  gsap.utils.toArray<SVGPathElement>('.dl').forEach((p) => {
    const svg = p.ownerSVGElement!;
    if (!svg.getBoundingClientRect().width) return;
    const len = p.getTotalLength();
    gsap.fromTo(p, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut', scrollTrigger: { trigger: svg, start: 'top 85%', once: true } });
  });
}
