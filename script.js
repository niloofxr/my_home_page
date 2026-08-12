document.querySelectorAll('[data-project]').forEach((card) => {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    const name = card.dataset.project;
    card.animate([{ transform: 'scale(1)' }, { transform: 'scale(.98)' }, { transform: 'scale(1)' }], { duration: 220 });
    document.title = `${name} · Niloofar's Project Hub`;
  });
});
