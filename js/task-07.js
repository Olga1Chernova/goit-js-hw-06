const refs = {
    inputFontChange: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

refs.inputFontChange.addEventListener('input', onChangedInput);

function onChangedInput(event){
    const targetEl = event.currentTarget;
    refs.text.style.fontSize = targetEl.value +'px';
};