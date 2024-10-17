let price;
let discount = 0.9; 

price = prompt("How much would you like to pay?")
price = parseInt(price);
console.log(`Price for you, $${price * discount}, my friend!`);