//Assignment 3: Company Product Catalog
let inventory = [];
// 2. Create three separate objects, each representing a product.
let product1 = {
    name: "Bike",
    model: "2024",
    cost: 2000,
    quantity: 10,
};
let product2 = {
    name: "Nokia",
    model: "3310",
    cost: 999,
    quantity: 15,
};
let product3 = {
    name: "Tablet",
    model: "iPad Pro",
    cost: 799,
    quantity: 7,
};
// 3. Add these product objects to the inventory array using an appropriate array method.
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
// 4. Access and log the quantity property of a specific product (e.g., third product) in the inventory array.
console.log(`Quantity of the third product (i.e., ${inventory[2].name}): ${inventory[2].quantity}`);
// 5. Explore adding and accessing more elements within the inventory array to understand how to manage product data.
// Adding a new product
let product4 = {
    name: "Smartwatch",
    model: "Apple Watch Series 6",
    cost: 399,
    quantity: 15,
};
inventory.push(product4);
// Accessing the new product
console.log(`Newly added product: ${inventory[3].name}, Model: ${inventory[3].model}, Cost: $${inventory[3].cost}, Quantity: ${inventory[3].quantity}`);
export {};
