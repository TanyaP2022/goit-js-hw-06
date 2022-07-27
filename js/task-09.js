const colorBody = document.querySelector("body");
const button = document.querySelector("button.change-color");
const span = document.querySelector("span.color");

button.addEventListener("click", randomColor);

function randomColor() {
  span.textContent = `${getRandomHexColor()}`;
  colorBody.style.backgroundColor = span.textContent;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
