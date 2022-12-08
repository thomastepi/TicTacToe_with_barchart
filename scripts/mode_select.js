// store HTML elements in variables
var btn = document.querySelector(".btn");
var radio_1 = document.getElementById("radio1");
var radio_2 = document.getElementById("radio2");

// change playing mode
function mode_select() {
  if (radio_1.checked) {
    window.location.href = "main.html";
  } else {
    window.location.href = "index.html";
  }
}
