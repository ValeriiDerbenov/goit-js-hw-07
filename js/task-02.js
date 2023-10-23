const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const makeIngredientList = (options) => {
  return options.map((option) => {
    const listEl = document.createElement("li");
    listEl.classList.add("item");
    listEl.textContent = option;
    return listEl;
  });
};
const elements = makeIngredientList(ingredients);
ingredientsList.append(...elements);
