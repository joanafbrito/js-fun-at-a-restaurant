function nameMenuItem(name) {
  return `Delicious ${name}`;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }

  return menuItem;
}

function addIngredients(ingredient1, ingredients) {
  if (ingredients.includes(ingredient1)) {
    return
  } else {
    return ingredients.push(ingredient1)
  }
};



function formatPrice(initialPrice) {
  return `$${initialPrice}`
};

function decreasePrice(price) {
  var decreasePrice = (price * .90)
  // var discount = (price * .10)
  // var decreasePrice = (price - discount)
  return decreasePrice
};

function createRecipe(title,ingredients,menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }

  return recipe
};





module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
