document.addEventListener("DOMContentLoaded", (event) => {
    console.log ("Dom fully loaded and parsed");


let moves = 0;
let card1;
let card2;
let cardsPicked = []
let cardSlots = ["card1", "card2", "card3", "card4", "card5", "card6", "card7", "card8", "card9", "card10",
                "card11", "card12", "card13", "card14", "card15", "card16", "card17", "card18", "card19", "card20",
                "card21", "card22", "card23", "card24", "card25", "card26", "card27", "card28", "card29", "card30"];

let imageArray = ['img1.png', "img2.png", "img3.png", "img4.png", "img5.png",'img6.png', "img7.png", "img8.png", "img9.png", "img10.png",
                'img11.png', "img12.png", "img13.png", "img14.png", "img15.png",'img1.png', "img2.png", "img3.png", "img4.png", "img5.png",'img6.png', "img7.png", "img8.png", "img9.png", "img10.png",
                'img11.png', "img12.png", "img13.png", "img14.png", "img15.png"]


// Initialize Array to store card symbols and set to back of cards 
function populate(){
    let cardBacks = document.getElementsByClassName("back");
    let cardFront = document.getElementsByClassName("front");
    for (i = 0;  i < cardBacks.length; i++){
        cardBacks[i].innerHTML = "<img src='backOfCard.png'>"
        cardFront[i].innerHTML = "<img src=" + imageArray[i] + ">"
    }
}

// shuffle array and set front of cards
function randomize(){
    let cardFront = document.getElementsByClassName("front");
    for(i = 0; i < cardFront.length; i++){
        let randImg = Math.floor(Math.random()*(30-i))
        cardFront[i].innerHTML = "<img src=" +imageArray[randImg] + ">"
        imageArray.splice(randImg, 1)
    } 

}

function cardClickTest(){
    console.log(event)
}

for (let i=0; i< cardSlots.length; i++){
    let oneCard = document.getElementById(cardSlots[i]);
    oneCard.addEventListener("click",cardClickTest(event))
}

// let cardClick = document.querySelectorAll(".card")
// cardClick.addEventListener("click", cardClickTest)

// function displayCard(){
//     this.classList.toggle("flip")
// }
// cardClick.forEach((card => card.addEventListener("click", displayCard)))


// Generate Cards
function generateCards(){
    populate()
    randomize()
    // cardClick.forEach((card => card.addEventListener("click", displayCard)))
            // checkCards(e);
        // cardClick.addEventListener("click", displayCard)
// })
}

// Checking Cards
// if (cardsPicked.length ===2){
//     if(cardsPicked[0].)
// }



// populate()
// randomize()
generateCards()
});