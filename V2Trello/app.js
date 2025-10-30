document.addEventListener("alpine:init", () => {
  Alpine.store("dataStore", {
    Todo: Alpine.$persist([]).as("Todo"),
    Doing: Alpine.$persist([]).as("Doing"),
    Done: Alpine.$persist([]).as("Done"),

    infosBtn: Alpine.$persist("true").as("infoBtn"),

    todoList: true,
    doingList: true,
    doneList: true,

    openTodo: false,
    openDoing: false,
    openDone: false,
    openEdit: false,

    dragList: null,
    dragIndex: null,
    dropList: null,
    dropIndex: null,

    editTaskData: { list: "", index: -1, name: "", desc: "" },
    search: "",

    infoModal() {
      this.infosBtn = !this.infosBtn;
    },

    filtreList(i) {
      if (i == "todo") {
        this.doingList = !this.doingList;
        this.doneList = !this.doneList;
      } else if (i == "doing") {
        this.todoList = !this.todoList;
        this.doneList = !this.doneList;
      } else if (i == "done") {
        this.todoList = !this.todoList;
        this.doingList = !this.doingList;
      } else {
        alert("Il ya un problème dans la filter liste");
      }
    },

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
        event.preventDefault(); /* remet la checkbox dans l'état d'avant donc en false évite le probleme de cancel et checkbox checked */
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
      this.editTaskData = { list: "", index: -1, name: "", desc: "" };
    },

    handleCheckbox(listName, index) {
      if (listName === "Todo") this.moveTask(this.Todo, this.Doing, index);
      else if (listName === "Doing")
        this.moveTask(this.Doing, this.Done, index);
      else if (listName === "Done") this.deleteTask(this.Done, index);
    },

    startDrag(listName, index) {
      this.dragList = listName;
      this.dragIndex = index;
      this.dropList = null;
      this.dropIndex = null;
    },

    enterDrop(listName, index) {
      this.dropList = listName;
      this.dropIndex = index;
    },

    leaveDrop(listName, index) {
      if (this.dropList === listName && this.dropIndex === index) {
        this.dropList = null;
        this.dropIndex = null;
      }
    },

    dropItem(targetListName) {
      if (this.dragList === null) return;

      const source = this[this.dragList];
      const target = this[targetListName];

      const [item] = source.splice(this.dragIndex, 1);

      let insertIndex = null;
      if (this.dropList === targetListName && this.dropIndex !== null) {
        insertIndex = this.dropIndex;
      }

      if (insertIndex === null || insertIndex > target.length) {
        target.push(item);
      } else {
        if (this.dragList === targetListName) {
          if (this.dragIndex < insertIndex) insertIndex = insertIndex - 1;
        }
        target.splice(insertIndex, 0, item);
      }

      this.endDrag();
    },

    endDrag() {
      this.dragList = null;
      this.dragIndex = null;
      this.dropList = null;
      this.dropIndex = null;
    },
  });
});
