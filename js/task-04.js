const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

incrementBtn.addEventListener("click", function () {
  console.log(`increment`);
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
decrementBtn.addEventListener("click", function () {
  console.log(`decrement`);
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});
