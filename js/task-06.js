const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const input = event.currentTarget;
    const inputLength = Number(input.dataset.length);

    if (input.value.length === inputLength) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    }
    else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}