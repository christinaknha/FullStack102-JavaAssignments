function initializeCart(){
    if (localStorage.getItem("cart") !== null){
        return
    } else{
        localStorage.setItem("cart", JSON.stringify([]))
    }
}

initializeCart();

function addItem(item){
    // call cart from local storage
    // "cart" contains something that has been stringified so we have to use JSON.parse
    let currentCart = JSON.parse(localStorage.getItem("cart"))
    // console.log(currentCart)
    // add item to cart
    let newItemID = document.getElementById("itemId").value
    let newItemName = document.getElementById("itemName").value
    let newItemPrice = document.getElementById("itemPrice").value
    let newItem = {"id" : newItemID, "name": newItemName, "price": newItemPrice}
    currentCart.push(newItem)
    // currentCart.push("pears", 3)
    // stores updated cart back into local storage
    localStorage.setItem("cart", JSON.stringify(currentCart))
}

function toRemove(itemID){
    // how to test if this works

    // retrieves cart from local storage
    let currentCart = JSON.parse(localStorage.getItem("cart"))
    // console.log(currentCart)
    // removes item with itemID
    for (let i = 0; i < currentCart.length; i++){
        if (currentCart[i].id == itemID){
            localStorage.removeItem(currentCart[i])
        }else{
            return
        }
    }
    // currentCart.removeItem(itemID)
    // stores updated cart back into local storage
    localStorage.setItem("cart", JSON.stringify(currentCart))
}


function displayCart(){
    // retrieves cart from local storage
    let currentCart = JSON.parse(localStorage.getItem("cart"))
    // console.log(currentCart)
    // logs cart contents to console
    console.log(currentCart)

}


// create event listeners for add item form and display cart button to call the respective functions
// add item form
let addItemForm = document.getElementById("addItemForm").children[6]
addItemForm.addEventListener("click", addItem)
// // display cart button
let displayCartButton = document.getElementById("displayCartButton")
displayCartButton.addEventListener("click", displayCart)

// console.log(document.getElementById("addItemForm").children[6])