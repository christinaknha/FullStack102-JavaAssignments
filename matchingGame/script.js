let moves = 0;
let card1;
let card2;
let cardSlots = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10",
                "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20",
                "card21", "card22", "card23", "card24", "card25", "card26", "card27", "card28", "card29", "card30"];

let imageArray = ['img1.png', "img2.png", "img3.png", "img4.png", "img5.png",'img6.png', "img7.png", "img8.png", "img9.png", "img10.png",
                'img11.png', "img12.png", "img13.png", "img14.png", "img15.png",'img1.png', "img2.png", "img3.png", "img4.png", "img5.png",'img6.png', "img7.png", "img8.png", "img9.png", "img10.png",
                'img11.png', "img12.png", "img13.png", "img14.png", "img15.png"]


// Initialize Array to store card symbols 
function populate(){
    // for (i = 0 ; i < cardSlots.length; i++){
    //     document.getElementById(cardSlots[i]).innerHTML = "<img src=" +imageArray[i] + ">"
    // }
    let cardFront = document.getElementsByClassName("front");
    for(i = 0; i < imageArray.length; i++){
        cardFront[i].innerHTML = "<img src=" +imageArray[i] + ">";
    } 
}


// Shuffle Array
function randomize(){
    // for (i = 0 ; i < cardSlots.length; i++){
       
    //     document.getElementById(cardSlots[i]).innerHTML = "<img src=" + imageArray[randImg] + ">"
    //     imageArray.splice(randImg, 1)
    // }
    let cardFront = document.getElementsByClassName("front");
        for (i = 0;  i < cardFront.length; i++){
            let randImg = Math.floor(Math.random()*(30-i))
            cardFront[i].innerHTML = "<img src=" + imageArray[randImg] + ">";
            imageArray.splice(randImg, 1)
        }
    backsOfCards()
}


function backsOfCards(){
    let cardBacks = document.getElementsByClassName("back");
    for (i = 0;  i < cardBacks.length; i++){
        cardBacks[i].innerHTML = "<img src='backOfCard.png'>"
    }
}



function playRound(){
    moves = moves + 1;
    let cardClick = document.getElementsByClassName("col");
    cardClick.addEventListener("click", () =>{
        cardClick.classList.toggle("flipCard");
    checkCards();
})
}


function checkCards(){
    if (card1.innerHTML == card2.innerHTMl){
        // leave cards alone
    } else if (card1.innerHTML != card2.innerHTMl){
        // flip cards back over
    } else{
        // Change to a display somehow
        console.log("Something went wrong, please try again")
    }


}

// function flipCard(){
//     card.
// }

// let card = document.getElementsByClassName("col")
// card.addEventListener("click", flipCard)
// let cardClick = document.getElementsByClassName("col");
// cardClick.addEventListener("click", () =>{
//     cardClick.classList.toggle("flipCard")
// })




populate();
// randomize();
// backsOfCards();

