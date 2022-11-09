const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector('#ingredients');

const createItem = (ingredient) => {
    const ingradientItem = document.createElement('li');
    ingradientItem.textContent = ingredient;
    ingradientItem.classList.add('item');
    return ingradientItem;
}
const elements = ingredients.map(createItem);
ingredientsRef.append(...elements);