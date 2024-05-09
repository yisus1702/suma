let result = document.querySelector(".result");
let history = document.querySelector(".history");

function display(write) {
  result.textContent += write;
}
function delAll() {
  result.textContent = "";
  history.textContent = "";
}
function del() {
  result.textContent = result.textContent.slice(0, -1);
}

function calculate() {
  history.textContent = result.textContent;
  result.textContent = eval(result.textContent);
  result.style.color = "#ff7675";
}