const form = document.querySelector(".login-form");
form.addEventListener("submit", formSub);

function formSub(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  console.dir(formElements);

  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };
  console.log(formData);

  if (mail === "" || password == "") {
    return alert(`Ще трошечки... Заповни, будь-ласка, обовязкові поля`);
  }
  return form.reset();
}
