// Idioma, tema y botón de copiar email.
import { root, ScrollTrigger } from './gsap';

export function initPrefs() {
  document.getElementById('lang')?.addEventListener('click', () => {
    const next = root.lang === 'es' ? 'en' : 'es';
    root.lang = next;
    try { localStorage.setItem('lang', next); } catch {}
    requestAnimationFrame(() => ScrollTrigger.refresh());
  });

  document.getElementById('theme')?.addEventListener('click', () => {
    const dark = root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    const next = dark ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch {}
  });

  document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((b) => {
    const label = b.textContent;
    b.addEventListener('click', async () => {
      try { await navigator.clipboard.writeText(b.dataset.copy!); } catch {}
      b.textContent = b.dataset.done!;
      setTimeout(() => (b.textContent = label), 1600);
    });
  });
}
