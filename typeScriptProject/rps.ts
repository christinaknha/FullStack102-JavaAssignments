let playerHand:string;
let computerHand: string;
let announce = document.getElementById("results") as HTMLInputElement;
let showPlayerMove = document.getElementById("playerMoveImage") as HTMLInputElement
let showComputerMove = document.getElementById("computerMoveImage") as HTMLInputElement


let p1Wins:number=0;
let p2Wins:number=0;


function initializePlayerHand(){
    let newP1Hand;
    let moveEntered = document.getElementById("pMove",) as HTMLInputElement | null;
    if (moveEntered != null){
        console.log(moveEntered.value)
        newP1Hand =  moveEntered.value
        showMove();
    }
    if (newP1Hand == "rock" || (newP1Hand == "paper") || (newP1Hand == "scissors")){
        playerHand = newP1Hand;
        // announce.innerHTML = "You have chosen ", playerHand
    } else{
        announce.innerHTML = "Please enter a valid value of either rock, paper, or scissors"
    }

}

initializePlayerHand()

function showMove(){
    if (playerHand == "rock"){
        showPlayerMove.innerHTML = "<img src= 'Rock.PNG'>"
    } else if (playerHand == "paper"){
        showPlayerMove.innerHTML = "<img src= 'Paper.PNG'>"
    }  else if (playerHand == "scissors"){
        showPlayerMove.innerHTML = "<img src= 'Scissors.PNG'>"
    }
}

function showCompMove(){
    if (computerHand == "rock"){
        showComputerMove.innerHTML = "<img src= 'Rock.PNG'>"
    } else if (computerHand == "paper"){
        showComputerMove.innerHTML = "<img src= 'Paper.PNG'>"
    }  else if (computerHand == "scissors"){
        showComputerMove.innerHTML = "<img src= 'Scissors.PNG'>"
    }

}

function initializeCompHand(){
    const hands = ["rock", "paper", "scissors"];
    let random = Math.floor(Math.random()*10)%3
    let newCompHand = hands[random];
    computerHand = newCompHand
    showCompMove();
}
initializeCompHand();

function playRound(){
    let p1Move = playerHand;
    let p2Move = computerHand;
    announce.innerHTML = ""

    if (p1Move == "rock" && p2Move == "rock" || p1Move == "scissors" && p2Move == "scissors" || p1Move == "paper" && p2Move =="paper" ) {
        announce.innerHTML = "Player 1 played " + p1Move + ". " +
        "Computer played " + p2Move + ". " +
        "It is a tie." + "Player 1 has " + p1Wins + " points. Player 2 has " + p2Wins + " points.";
        // console.log("Player 1 played " + JSON.parse(localStorage.getItem("player1Hand")) + ". ")
        // console.log("Computer played " + JSON.parse(localStorage.getItem("computerHand")) + ". ")
        // console.log("It is a tie!")
        return null

    // Sets conditions for player 1 winning
    }else if (p1Move == "rock" && p2Move == "scissors" || p1Move == "scissors" && p2Move == "paper" || p1Move == "paper" && p2Move =="rock"){
        p1Wins = p1Wins + 1;
        announce.innerHTML = "Player 1 played " + p1Move + ". " +
        "Computer played " + p2Move + ". " +
        "Player 1 is the winner!" + "Player 1 has " + p1Wins + " points. Player 2 has " + p2Wins + " points.";
        // console.log(player1.name + " played " + hands[p1Move] + ". ")
        // console.log(player2.name + " played " + hands[p2Move] + ". ")
        // console.log(player1.name + " is the winner")
        return p1Move
//     // Sets conditions for player 2 winning
    } else if (p2Move == "rock" && p1Move == "scissors" || p2Move == "scissors" && p1Move == "paper" || p2Move == "paper" && p1Move =="rock"){
        p2Wins = p2Wins + 1;
        announce.innerHTML = "Player 1 played " + p1Move + ". " +
        "Computer played " + p2Move + ". " +
        "Computer is the winner!" + "Player 1 has " + p1Wins + " points. Player 2 has " + p2Wins + " points.";
        // console.log(player1.name + " played " + hands[p1Move] + ". ")
        // console.log(player2.name + " played " + hands[p2Move]+ ". ")
        // console.log(player2.name + " is the winner")
        return p2Move
//      // Sets condition for anything that might go wrong
    }else{
        announce.innerHTML = ("Please try again")
        // console.log("Please try again")
        return "Try again"
    
    }
}


let playRoundButton = document.getElementById("playRoundButton")
playRoundButton?.addEventListener("click", () =>{
    initializePlayerHand();
    playRound();
})
