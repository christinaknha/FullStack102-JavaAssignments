// Show an unordered list of to-do items: started in HTML file

// show an input to enter a new to-do item: started in HTML file

// Show a button to add a to-do
// when clicked, item is added to bottom of list

let currentList = document.getElementById("list")


function addItem(){
    let newLI = document.createElement("li");
    let itemToAdd= document.getElementById("itemToAdd").value
    newLI.innerHTML = itemToAdd
    currentList.appendChild(newLI)
    document.getElementById("itemToAdd").value = ""

}

// let listItems = document.getElementsByTagName("li")
//     for ( i = 0; i < listItems.length; i++){
//         listItems[i].onclick = function(){
//             div = document.getElementById("list")
//             div.removeChild(listItems[i])
//         }
//     }

function removeItem(event){
    console.log(event.target);
    div = document.getElementById("list")
    div.removeChild(event.target)
}

// let listItems = document.getElementsByTagName("li")
    // for ( i = 0; i < currentList.length; i++){
    //     currentList[i].onclick = removeItem
    //     }
    
currentList.addEventListener("click", removeItem)

let addItemButton = document.getElementById("addButton");
addItemButton.addEventListener("click", addItem)