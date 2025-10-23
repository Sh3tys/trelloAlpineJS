export default () => ({
  username: Alpine.$persist('').as('username'),
  Lists: Alpine.$persist({}).as('Lists'),
  login() {
    if (this.username.trim() !== '') {
      window.location.href = 'trello.html';
    }
  },
});
