// creates a map
let fruitInventory = new Map ();
fruitInventory.set ("apple", 10);
fruitInventory.set ("banana", 20);
fruitInventory.set ("orange", 30);

// use set method to change apple inventory
fruitInventory.set ("apple", 15)

// use get to pull banana value and set it to banana inventory
bananaInventory = fruitInventory.get("banana")

// prints results to console
console.log(fruitInventory)
console.log(bananaInventory)

// creates a set
let uniqueColors = new Set();
uniqueColors.add("red");
uniqueColors.add("blue");
uniqueColors.add("green");

// use add method to add yellow to set
uniqueColors.add("yellow");

// use has method to check if bue is present. Store in has blue
hasBlue = uniqueColors.has("blue");

// prints results to console
console.log(uniqueColors)
console.log(hasBlue)