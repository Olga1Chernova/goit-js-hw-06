
const refs = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    countValue: document.querySelector('#value'),
};

refs.decrement.addEventListener('click', onDecrementButtonClick);
refs.increment.addEventListener('click', onIncrementButtonClick);

let counterValue = 0;

function onDecrementButtonClick() {
    refs.countValue.value = counterValue -= 1;
    refs.countValue.textContent = refs.countValue.value;
}

function onIncrementButtonClick() {
    refs.countValue.value = counterValue += 1;
    refs.countValue.textContent = refs.countValue.value;
}