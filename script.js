import './style.css'

var toggleMode = document.querySelector(".toggleModeButton");
toggleMode.addEventListener("click", function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
});
