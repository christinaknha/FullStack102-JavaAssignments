// Update the 'Apples' item to say 'Granny Smith Apples'
// const listElements = document.querySelectorAll("li");
// const arrayOfList = Array.from(listElements);
// arrayOfList[1].innerHTML = "Granny Smith Apples"
// console.log(listElements)
// console.log(arrayOfList)

document.getElementsByTagName("li")[1].innerHTML = "Granny Smith Apples"

// Remove 'Oat Milk' from the list
// arrayOfList[3].remove()
// console.log(arrayOfList)

document.getElementsByTagName("li")[3].remove()

// Add an item 'Kombucha'
const newLI = document.createElement("li");
newLI.innerHTML = "Kombucha";
const list = document.querySelector("ul");
list.appendChild(newLI)


// Clear the list and programmatically add items from the array ['protein bars', 'almonds', 'peanut butter']

// document.querySelectorAll("li")[3].remove();
// document.querySelectorAll("li")[2].remove();
// document.querySelectorAll("li")[1].remove();
// document.querySelectorAll("li")[0].remove();

var listElements = document.querySelectorAll("li")
var listLength = document.querySelectorAll("li").length
for (var i = listLength-1; i >= 0 ; i--){
    listElements[i].remove()
    
    // document.getElementsByTagName("li")[i].remove();
    // document.querySelectorAll("li")[i].remove();
}

newListArray = ['protein bars', 'almonds', 'peanut butter']
// console.log(newListArray[0])
var i = 0
while (i < newListArray.length){
    var newListLI = document.createElement("li");
    newListLI.innerHTML = newListArray[i]
    var newList = document.querySelector("ul");
    list.appendChild(newListLI)
    i++
}

// Add the class 'important' to the almonds item.
let almonds = document.getElementsByTagName("li")[1]
// console.log(almonds)

almonds.class = "important"
