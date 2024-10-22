let price;
let discount = 0.9; 

price = prompt("How much would you like to pay?")
price = parseFloat(price);
price = price * discount;
console.log(`Price for you, $${price.toFixed(2)}, my friend!`);