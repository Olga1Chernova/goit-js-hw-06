const formRef = document.querySelector('.login-form');


formRef.querySelector.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const targetFormEl = event.currentTarget;

  const {
    email: { value: email },
    password: { value: password },
  } = targetFormEl.elements;

  if (email.length === 0 || password.length === 0)
    return window.alert("Please, fill out all the fields!");

  console.log({ email, password });

  targetFormEl.reset();
}