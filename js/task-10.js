const input = document.querySelector("input");
const div = document.querySelector("#boxes");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");

create.addEventListener("click", createBoxes);
function createBoxes(amount) {
  const divAmount = [];
  for (let i = 1; i <= input.value; i += 1) {
    divAmount.push(i);
    console.log(divAmount);
  }
  const divBoxes = divAmount.map((number) => {
    const createEl = document.createElement("div");
    createEl.style.width = `${30 + number * 10}px`;
    createEl.style.height = `${30 + number * 10}px`;
    createEl.style.backgroundColor = getRandomHexColor();
    return createEl;
  });
  div.append(...divBoxes);
}
destroy.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  div.innerHTML = "";
  input.value = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
