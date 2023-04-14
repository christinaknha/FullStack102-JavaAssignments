const storeOwners = [
    { charles: 1 },
    { sally: 1 },
    { cassandra: 1 },
    {"Danny Shavez": 1, location: "in NM",},
];

const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
        let totalLocations = totalLocations + i;
    }
    // Why are we returning i????
    return i;
    // changed from i to totalLocations
    // return totalLocations
};
// CHANGE: Moved to be AFTER listNumberOfStores is defined
let locations = listNumberOfStores;

function tellMeMyStores() {
    // Changed question
    console.log("Hey, can you tell me who owns stores?");
    // console.log("Hey, can you tell me how many stores you have?");
        if (locations > 0) {
            console.log("Of course, we have " + totalLocations + " stores");
    }
}

function hasStore() {
    for (let i = 0; i <= 2; i++) {
        // CHANGE: object.key to object.values
        people = Object.values(storeOwners);
        // CHANGE .toString to Object.Keys to access names
        let person = Object.keys(people[i]);
             console.log("Yes, " + person + " has one");
    }
}

tellMeMyStores();
hasStore();

// CHANGE: changed index from 2 to 3
let man = Object.keys(storeOwners[3]);
// CHANGE: index from 2 to 0
let mister = man[0];

// console.log (man)
// console.log (mister)

// CHANGE: object from mister to storeOwners at the third index
let whereHeLives = storeOwners[3].location;
console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");


// // // defines an array of objects of owner information
// // const storeOwners = [
// //     { name: "charles", stores: 1 },
// //     { name: "sally", stores: 1 },
// //     { name: "cassandra", stores: 1 },
// //     { name: "Danny Shavez", stores: 1, location: "in NM"},
// // ];

// // // creates a function to determine how many total stores there are
// // let totalLocations = 0
// // const listNumberOfStores = function () {
// //     for (let i = 0; i < storeOwners.length; i++) {
// //         totalLocations += storeOwners[i].stores;
// //     }
// //     return totalLocations
// // };

// // let locations = listNumberOfStores(storeOwners);


// // function tellMeMyStores() {
// //     console.log("Hey, can you tell me how many stores you have?");
// //         if (locations > 0) {
// //             console.log("Of course, we have " + locations + " stores");
// //     }
// // }

// // function hasStore() {
// //     console.log("Hey can you tell me who owns stores?")
// //         for (let i = 0; i <= 2; i++) {
// //                 console.log("Yes, " + storeOwners [i].name + " has one");
// //         }
// // }

// // tellMeMyStores();
// // hasStore();

// // let mister = storeOwners[3].name;

// // let whereHeLives = storeOwners[3].location;
// // console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");