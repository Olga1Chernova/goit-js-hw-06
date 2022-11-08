function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonColorChange = document.querySelector('.change-color');
const spanColorName = document.querySelector('.color');
const body = document.body;


buttonColorChange.addEventListener('click', onColorChange);

function onColorChange(event) {
    body.style.backgroundColor = getRandomHexColor();
    spanColorName.textContent = body.style.backgroundColor;
}