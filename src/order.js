function takeOrder(newOrder, deliveryOrders) {
  // if deliveryOrders < 3 ADD new order
  //
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(newOrder);
  }

  return deliveryOrders;

}

function refundOrder(orderNumber, deliveryOrders) {
  // if deliveryOrders > 2 remove order by number pay attention on the order number
  // if (deliveryOrders.length > 2) {
  // is not asking for
    // deliveryOrders.shift()- not the best one here 
  // this is for the first test
  for (var i = 0; i < deliveryOrders.length; i++ ) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
    deliveryOrders.splice(i, 1)
  }
}
  return deliveryOrders;
}

function listItems(deliveryOrders) {
    // list the order itens by name // dif order itens by name //
 var orderNames = [];
for (var i = 0; i < deliveryOrders.length; i++ ) {
    orderNames.push(deliveryOrders[i].item)
}
return orderNames.join(", ");

}

function searchOrder(deliveryOrders, food) {
  var orderNames = [];
 for (var i = 0; i < deliveryOrders.length; i++ ) {
     orderNames.push(deliveryOrders[i].item)
 }

 return orderNames.includes(food);

}




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
