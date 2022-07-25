const input = document.querySelector("#validation-input");
const reqLength = input.dataset.length;

function validLength(event) {
  if (event.currentTarget.value.length === Number(reqLength)) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  }
  input.classList.remove("valid");
  return input.classList.add("invalid");
}

input.addEventListener("blur", validLength);
