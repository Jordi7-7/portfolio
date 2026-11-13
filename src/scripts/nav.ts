// Menú móvil, barra de progreso y sección activa. Las secciones salen de los enlaces .navlink, así que no hay que tocar esto al añadir una.
import { root } from './gsap';

export function initNav() {
  const menu = document.getElementById('menu')!;
  const mnav = document.getElementById('mnav')!;
  menu.addEventListener('click', () => {
    const open = mnav.hidden;
    mnav.hidden = !open;
    menu.setAttribute('aria-expanded', String(open));
  });
  mnav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') { mnav.hidden = true; menu.setAttribute('aria-expanded', 'false'); }
  });

  const bar = document.getElementById('progress')!;
  const onScroll = () => {
    const h = root.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? Math.min(1, scrollY / h) : 0})`;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const links = [...document.querySelectorAll<HTMLAnchorElement>('.navlink')];
  const ids = [...new Set(links.map((a) => a.getAttribute('href')!.slice(1)))];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  ids.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
}
