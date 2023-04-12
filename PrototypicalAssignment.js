// Create constructor function for Person
class Person{
    constructor(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
        this.favoriteFoods = favoriteFoods;
    }
    // Add function called fullName that returns first and last name properties concatenated together
    fullName(){
        return `This person's full name is ${this.firstName} ${this.lastName}`
    }
    // Overwrite the toString method by creating a toString method for person
    toString(){
        return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`

    }
}
//  Adding a property called family to Person object
Person.prototype.family = [];


Person.prototype.addToFamily = function(members) {

    if(members instanceof Person && !this.family.includes(members)){
        this.family.push(members)
    }
    // console.log(this.family.length)
    return this.family.length
}



let peter = new Person ("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
let Kevin = new Person ("Kevin", "Oleary","Orange", 8, ["pizza, frenchfries"]);
let Sioban = new Person ("Sioban", "Oleary", "Red", 5, ["potatoes", "ramen"]);
let Sean = new Person ("Sean", "Oleary", "Red", 5, ["potatoes", "ramen"]);
console.log(peter.fullName()) 
console.log(peter.toString())

console.log(peter.addToFamily(Kevin))
console.log(peter.addToFamily(Sioban))
console.log(peter.addToFamily(Kevin))
console.log(peter.addToFamily(Sean))
console.log(peter.family)

console.log(peter instanceof Person)
console.log(Kevin instanceof Person)
console.log(Sioban instanceof Person)
console.log(Sean instanceof Person)


