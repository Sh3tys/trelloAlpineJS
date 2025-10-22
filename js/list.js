export default () => ({
  addList(listName) {
    if (listName.trim() !== '') {
      let Lists = Alpine.store('Lists');
      if (!Lists[listName]) {
        Lists[listName] = [];
      }
    }
  },

  removeList(listName) {
    let Lists = Alpine.store('Lists');
    if (Lists[listName] && Lists[listName].length !== 0) {
      alert("La liste n'est pas vide. Supprimez d'abord toutes les tâches.");
      return;
    }
    if (confirm('Confirmer la suppression de la liste ?')) {
      delete Lists[listName];
    }
  },

  modifyList(oldName, newName) {
    let Lists = Alpine.store('Lists');
    if (Lists[oldName]) {
      Lists[newName] = Lists[oldName];
      delete Lists[oldName];
    } else {
      alert("La liste spécifiée n'existe pas.");
    }
  },
});
