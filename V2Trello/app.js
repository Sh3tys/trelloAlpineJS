//app.js
document.addEventListener('alpine:init', () => {
  Alpine.store('dataStore', {
    Todo: Alpine.$persist([]).as('Todo'),
    Doing: Alpine.$persist([]).as('Doing'),
    Done: Alpine.$persist([]).as('Done'),
    openTodo: false,
    openDoing: false,
    openDone: false,
  });
});
