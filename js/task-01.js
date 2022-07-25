const numberCategoriesUl = document.querySelector("ul#categories").children;
console.log(`Number of categories: ${numberCategoriesUl.length}`);

const category = document.querySelectorAll("h2");
const elements = document.querySelectorAll("li>ul");

category.forEach((value, index) => {
  console.log(`Category: ${value.textContent}`);
  console.log(`Elements: ${elements[index].children.length}`);
});
