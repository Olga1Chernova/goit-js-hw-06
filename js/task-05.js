const refs = {
    inputValue: document.querySelector('#name-input'),
    spanOutput: document.querySelector('#name-output'),
};

refs.inputValue.addEventListener('input', onInputChange);


function onInputChange(event) {
  const inputText = event.currentTarget.value;
  refs.spanOutput.textContent = inputText ? inputText : "Anonymous";
}