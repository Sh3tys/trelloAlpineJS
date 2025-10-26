export default () => ({
  taskName: '',
  taskDesc: '',
  liste: '',
  taskCheck: false,

  addTask() {
    let Lists = Alpine.store('Lists');

    if (Lists[this.liste]) {
      if (this.taskName.trim() !== '' && this.taskDesc.trim() !== '') {
        Lists[this.liste].push({
          name: this.taskName.trim(),
          description: this.taskDesc.trim(),
          check: this.taskCheck,
        });
      } else {
        alert('Le nom ou desc de la tâche ne peuvent pas être vides.');
      }
    } else {
      alert("La liste spécifiée n'existe pas.");
    }
  },

  removeTask(list, index) {
    let Lists = Alpine.store('Lists');
    Lists[list].splice(index, 1);
  },

  modifyTask(list, index, newTaskName, newTaskDesc, newListe, newTaskCheck) {
    let Lists = Alpine.store('Lists');

    if (!Lists[list]) {
      alert("La liste d'origine n'existe pas.");
      return;
    }
    if (!Lists[newListe]) {
      alert("La liste choisie n'existe pas.");
      return;
    }

    const task = Lists[list][index];
    this.removeTask(list, index);
    this.addTask(newTaskName, newTaskDesc, newListe, newTaskCheck);
  },
});
