document.addEventListener('alpine:init', () => {
  Alpine.store('dataStore', {
    Todo: Alpine.$persist([]).as('Todo'),
    Doing: Alpine.$persist([]).as('Doing'),
    Done: Alpine.$persist([]).as('Done'),

    openTodo: false,
    openDoing: false,
    openDone: false,
    openEdit: false,

    editTaskData: { list: '', index: -1, name: '', desc: '' },

    moveTask(fromList, toList, index) {
      const task = fromList[index];
      fromList.splice(index, 1);
      toList.push([task[0], task[1], false]);
    },

    deleteTask(list, index) {
      const task = list[index];
      if (confirm(`Supprimer la tâche "${task[0]}" ?`)) {
        list.splice(index, 1);
      } else {
        task[2] = false;
      }
    },

    openEditModal(listName, index, task) {
      this.editTaskData = {
        list: listName,
        index,
        name: task[0],
        desc: task[1],
      };
      this.openEdit = true;
    },

    updateTask(name, desc, newList) {
      const { list, index } = this.editTaskData;
      const task = [name, desc, false];

      if (list === newList) {
        this[list][index] = task;
      } else {
        this.moveTask(this[list], this[newList], index);
        this[newList][this[newList].length - 1] = task;
      }
      this.openEdit = false;
      this.editTaskData = { list: '', index: -1, name: '', desc: '' };
    },

    handleCheckbox(listName, index) {
      if (listName === 'Todo') this.moveTask(this.Todo, this.Doing, index);
      else if (listName === 'Doing')
        this.moveTask(this.Doing, this.Done, index);
      else if (listName === 'Done') this.deleteTask(this.Done, index);
    },
  });
});
