export default () => ({
  testname: Alpine.$persist(""),

  login() {
    if (this.testname.trim() !== "") {
      window.location.href = "trelloTest.html";
    }
  },
});
