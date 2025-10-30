import nimp from "./script2.js";

document.addEventListener("alpine:init", () => {
  Alpine.data("testApp", nimp);
});
