// Pestañas de capturas y visor ampliado.
export function initGallery() {
  document.querySelectorAll<HTMLElement>('[data-media]').forEach((m) => {
    const shots = [...m.querySelectorAll<HTMLElement>('[data-shot]')];
    const tabs = [...m.querySelectorAll<HTMLButtonElement>('[data-tab]')];
    tabs.forEach((tb) => tb.addEventListener('click', () => {
      const k = Number(tb.dataset.tab);
      shots.forEach((s, i) => { s.hidden = i !== k; });
      tabs.forEach((x, i) => x.setAttribute('aria-selected', String(i === k)));
    }));
  });

  const lb = document.getElementById('lb') as HTMLDialogElement | null;
  if (!lb) return;
  const img = document.getElementById('lb-img') as HTMLImageElement;
  const cap = document.getElementById('lb-cap')!;
  document.querySelectorAll<HTMLElement>('[data-shot]').forEach((s) => s.addEventListener('click', () => {
    img.src = s.dataset.full!;
    img.alt = cap.textContent = s.dataset.alt!;
    lb.showModal();
  }));
  document.getElementById('lb-close')!.addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
}
