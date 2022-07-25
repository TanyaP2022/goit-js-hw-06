const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsItem = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = option;
  return itemEl;
});

console.log(elements);

ingredientsItem.append(...elements);
