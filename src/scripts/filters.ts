// Filtros por tecnología: varias selecciones suman (se muestran los proyectos con cualquiera).
import { gsap, ScrollTrigger, reduce } from './gsap';

export function initFilters() {
  const active = new Set<string>();
  const sections = [...document.querySelectorAll<HTMLElement>('[data-projects]')];

  function apply(animate: boolean) {
    sections.forEach((sec) => {
      const items = [...sec.querySelectorAll<HTMLElement>('[data-item]')];
      let shown = 0;
      items.forEach((it) => {
        const techs = (it.dataset.tech || '').split(' ');
        const ok = active.size === 0 || techs.some((x) => active.has(x));
        const wasHidden = it.hidden;
        it.hidden = !ok;
        if (!ok) return;
        shown++;
        it.querySelectorAll<HTMLElement>('[data-ti]').forEach((ti) => ti.classList.toggle('hit', active.has(ti.dataset.ti!)));
        if (animate && wasHidden && !reduce) gsap.fromTo(it, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' });
      });
      sec.querySelectorAll<HTMLButtonElement>('[data-tech-btn]').forEach((b) => b.setAttribute('aria-pressed', String(active.has(b.dataset.techBtn!))));
      sec.querySelector('[data-all]')!.setAttribute('aria-pressed', String(active.size === 0));
      const c = sec.querySelector<HTMLElement>('[data-count]')!;
      c.textContent = c.dataset.tpl!.replace('{n}', String(shown)).replace('{total}', String(items.length));
      (sec.querySelector('[data-empty]') as HTMLElement).hidden = shown !== 0;
    });
    ScrollTrigger.refresh();
  }

  sections.forEach((sec) => {
    sec.querySelectorAll<HTMLButtonElement>('[data-tech-btn]').forEach((b) => b.addEventListener('click', () => {
      const id = b.dataset.techBtn!;
      active.has(id) ? active.delete(id) : active.add(id);
      apply(true);
    }));
    sec.querySelector('[data-all]')!.addEventListener('click', () => { active.clear(); apply(true); });
  });
}
