function createRestaurant(restaurantName) {
  // var restaurants = [];
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }

  return restaurant;
}

function addMenuItem(restaurant, menuItem) {
  if (menuItem.type === "breakfast" && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem);
  } else if (menuItem.type === "lunch" && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem);
  } else if (menuItem.type === "dinner" && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem);
  }
};

function removeMenuItem(restaurant, itemRemove, typeRemove) {
  var menuMessage = "No one is eating our " + itemRemove + " - it has been removed from the " + typeRemove + " menu!";

  if (typeRemove === "breakfast" && restaurant.menus.breakfast.length > 0 && restaurant.menus.breakfast[0].name === itemRemove) {
    restaurant.menus.breakfast.splice(0, 1);
  } else if (typeRemove === "lunch" && restaurant.menus.lunch.length > 0 && restaurant.menus.lunch[0].name === itemRemove) {
    restaurant.menus.lunch.splice(0, 1);
  } else if (typeRemove === "dinner" && restaurant.menus.dinner.length > 0 && restaurant.menus.dinner[0].name === itemRemove) {
    restaurant.menus.dinner.splice(0, 1);
  } else {
    menuMessage = "Sorry, we don't sell " + itemRemove + ", try adding a new recipe!";
  }

  return menuMessage;
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
