import Login from './js/login.js';
import SuperList from './js/SuperList.js';
import List from './js/list.js';
import Task from './js/task.js';
import Modal from './js/modal.js';

document.addEventListener('alpine:init', () => {
  Alpine.store('Lists', SuperList); //SuperListe des listes de tâches

  Alpine.data('login', Login);
  Alpine.data('list', List);
  Alpine.data('task', Task);
  Alpine.store('modal', Modal());
});
