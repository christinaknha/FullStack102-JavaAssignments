
// // get all post
function getAllPosts(){
    removeItem
    fetch ("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => displayData(json))
}

// // // gets post with the id of 10
function getId_10(){
    removeItem
    fetch ("https://jsonplaceholder.typicode.com/posts/10")
    .then((response) => response.json())
    .then((json) => displayData(json))

}
// //can use the code below if wanting to use the findId function
// //.then((json) => findId(10,json))
// make method or use json as an input

// creates a function that finds id of 10
// function findId(id, jsonData){
//     for (let i = 0; i <jsonData.length; i++){
//         if (jsonData[i].id === 10){
//         console.log(jsonData[i])
//         }
//     }
// }


// // create new post and log the id generated for it by the server
function createPost (){
    removeItem
    fetch ("https://jsonplaceholder.typicode.com/posts", {
        method : "POST",
        body: JSON. stringify({
            userId:10,
            title: "this is a title",
            body: "this is some body information"
        }),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        },

    })
    .then((response) => response.json())
    .then((json) => displayData(json.id))
    // .then((json) => console.log(json))
}

// Replace the post with id of 12 and render the responseJSON
function replace_12(){
    removeItem
    fetch ("https://jsonplaceholder.typicode.com/posts/12", {
        method : "PUT",
        body: JSON. stringify({
            userId:10,
            id: 12,
            title: "this is a title",
            body: "this is some body information"
        }),
        headers: {
            'Content-type': "application/json; charset=UTF-8"
        },

    })
    .then((response) => response.json())
    .then((json) => displayData(json))
}
// // Replace the title with id of 12 and render the responseJSON
function titleChange_12() {
    removeItem
    fetch ("https://jsonplaceholder.typicode.com/posts/12", {
        method : "PUT",
        body: JSON. stringify({
            userId:10,
            id: 12,
            title: "The Newest title of Post ID 12",
            body: "this is some body information"
                    }),
                    headers: {
                        'Content-type': "application/json; charset=UTF-8"
                    },

})
.then((response) => response.json())
.then((json) => displayData(json))
}
// // delete post with id 12
function delete_12(){
    removeItem
    fetch("https://jsonplaceholder.typicode.com/posts/12", {
        method: "DELETE",
    })
    .then((response) => response.json())
    .then(() => displayData("The post with ID 12 has successfully been deleted"));
}

// // creates a function to display the data
function displayData(jsonData) {
    let dataToDisplay = document.getElementById("main");
    let data =jsonData
    dataToDisplay.innerHTML = JSON.stringify(data);
}

// function displayData(jsonData) {
//     let div = document.getElementById("main");
//     let dataToDisplay = document.createElement("div");
//     let data =jsonData
//     dataToDisplay.innerHTML = JSON.stringify(data);
//     div.appendChild(dataToDisplay)
// }


// function displayNewId(jsonData) {
//     removeItem
//     let div = document.getElementById("main");
//     let dataToDisplay = document.createElement("div");
//     let data =jsonData.id
//     dataToDisplay.innerHTML = JSON.stringify(data);
//     dataToDisplay.className = "result"
//     div.appendChild(dataToDisplay)
// }

// // Removes data when you click on it
let currentItem = document.getElementById("main")

function removeItem(){
    document.getElementById("MyDiv").innerHTML = "";
}

currentItem.addEventListener("click", removeItem)

// // creates event to call functions each time the buttons are clicked on
const button1 = document.getElementById("button1")
button1.addEventListener("click", getAllPosts)

const button2 = document.getElementById("button2")
button2.addEventListener("click", getId_10)

const button3 = document.getElementById("button3")
button3.addEventListener("click", createPost)

const button4 = document.getElementById("button4")
button4.addEventListener("click", replace_12)

const button5 = document.getElementById("button5")
button5.addEventListener("click", titleChange_12)

const button6 = document.getElementById("button6")
button6.addEventListener("click", delete_12)
