const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('ul#ingredients');

const elements = ingredients.map(ingredient => {
  
const ingredientEl = document.createElement('li');
ingredientEl.classList.add('item');
ingredientEl.textContent = `"${ingredient}"`;
  
  return ingredientEl;
})
 
console.log(elements);
ingredientsContainerEl.append(...elements);
console.log(ingredientsContainerEl);

