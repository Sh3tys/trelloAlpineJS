export default () => ({
  username: Alpine.$persist("").as("username"),
  login() {
    if (this.username.trim() !== "") {
      window.location.href = "trello.html";
    }
  },
});
