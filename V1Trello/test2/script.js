document.addEventListener('alpine:init', () => {
  Alpine.store('affichage', {
    afficher: false,
  });
  Alpine.store('affichage2', {
    afficher: false,
  });
});
