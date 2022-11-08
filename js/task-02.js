const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach((ingredient) => {
    const ingradientItem = document.createElement('li');
    ingradientItem.textContent = ingredient;
    ingradientItem.classList.add('item');
    ingredientsRef.append(ingradientItem);
})