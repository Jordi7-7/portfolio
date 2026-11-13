// Terminal interactiva del héroe.
import { gsap, reduce } from './gsap';

export function initTerminal() {
  document.querySelectorAll<HTMLElement>('[data-term]').forEach((box) => {
    const cmdEl = box.querySelector<HTMLElement>('[data-cmd]')!;
    const outs = [...box.querySelectorAll<HTMLElement>('[data-out]')];
    const btns = [...box.querySelectorAll<HTMLButtonElement>('[data-run]')];
    let timer = 0;
    btns.forEach((b) => b.addEventListener('click', () => {
      const i = Number(b.dataset.run);
      clearInterval(timer);
      btns.forEach((x, k) => x.setAttribute('aria-pressed', String(k === i)));
      outs.forEach((o) => { o.hidden = true; });
      const out = outs[i];
      const text = b.textContent || '';
      if (reduce) { cmdEl.textContent = text; out.hidden = false; return; }
      cmdEl.textContent = '';
      let n = 0;
      timer = window.setInterval(() => {
        cmdEl.textContent = text.slice(0, ++n);
        if (n >= text.length) {
          clearInterval(timer);
          out.hidden = false;
          gsap.fromTo(out, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' });
        }
      }, 45);
    }));
  });
}
