// Initialing player hands
function initializeHands(){
    if (localStorage.getItem("player1Hand") !== null && (localStorage.getItem("computerHand") !== null)){
        return
    } else if (localStorage.getItem("player1Hand") !== null && (localStorage.getItem("computerHand") === null)){
        localStorage.setItem("player1Hand", JSON.stringify([]))
    } else if (localStorage.getItem("player1Hand") === null && (localStorage.getItem("computerHand") !== null)){
        localStorage.setItem("computerHand", JSON.stringify([]))
    } else if(localStorage.getItem("player1Hand") === null && (localStorage.getItem("computerHand") === null)){
        localStorage.setItem("player1Hand", JSON.stringify([]))
        localStorage.setItem("computerHand", JSON.stringify([]))
    } else{
        return "Something is wrong. Please try again"
    }
}

initializeHands();

// function for player 1 hand
function initializeP1Hand(){
    let currentP1Hand = JSON.parse(localStorage.getItem("player1Hand"))
    let newP1Hand = document.getElementById("pMove").value
    if (newP1Hand == "rock" || (newP1Hand == "paper") || (newP1Hand == "scissors")){
        currentP1Hand.push(newP1Hand)
    } else{
        window.alert("Please enter a valid value of either rock, paper, or scissors")
    }
    // let newP1Hand = {"hand" : P1Hand}
    // currentP1Hand.push(newP1Hand)
    localStorage.setItem("player1Hand", JSON.stringify(currentP1Hand))
}   

let submitMoveButton = document.getElementById("submitMoveButton")
submitMoveButton.addEventListener("click", initializeP1Hand)

// function for computer hand
function initializeCompHand(){
    let currentCompHand = JSON.parse(localStorage.getItem("computerHand"))
    const hands = ["rock", "paper", "scissors"];
    let newCompHand = hands[parseInt(Math.random(hands)*10)%3];
    currentCompHand.push(newCompHand)
    localStorage.setItem("computerHand", JSON.stringify(currentCompHand))
}

function resetHands(){
    localStorage.removeItem('player1Hand')
    localStorage.removeItem('computerHand')
    initializeHands()
}

// defines number of wins for each player for score
let p1Wins=0;
let p2Wins=0;
 
// // Creates function taking two players as input
function playRound(){
    // defines players moves 
    // let p1Move = initializeP1Hand();
    // let p2Move = initializeCompHand();
    // initializeP1Hand();
    initializeCompHand();
    let p1Move = JSON.parse(localStorage.getItem("player1Hand"))
    let p2Move = JSON.parse(localStorage.getItem("computerHand"))

//     // sets condition for a tie
    if (p1Move == p2Move) {
        window.alert("Player 1 played " + JSON.parse(localStorage.getItem("player1Hand")) + ". " +
        "Computer played " + JSON.parse(localStorage.getItem("computerHand")) + ". " +
        "It is a tie." + "Player 1 has " + p1Wins + " points. Player 2 has " + p2Wins + " points.");
        // console.log("Player 1 played " + JSON.parse(localStorage.getItem("player1Hand")) + ". ")
        // console.log("Computer played " + JSON.parse(localStorage.getItem("computerHand")) + ". ")
        // console.log("It is a tie!")
        return "null"
//     // Sets conditions for player 1 winning
    }else if (p1Move == "rock" && p2Move == "scissors" || p1Move == "scissors" && p2Move == "paper" || p1Move == "paper" && p2Move =="rock"){
        p1Wins = p1Wins + 1;
        window.alert("Player 1 played " + JSON.parse(localStorage.getItem("player1Hand")) + ". " +
        "Computer played " + JSON.parse(localStorage.getItem("computerHand")) + ". " +
        "Player 1 is the winner!" + "Player 1 has " + p1Wins + " points. Player 2 has " + p2Wins + " points.");
        // resetHands()
        // console.log(player1.name + " played " + hands[p1Move] + ". ")
        // console.log(player2.name + " played " + hands[p2Move] + ". ")
        // console.log(player1.name + " is the winner")
        return p1Move
//     // Sets conditions for player 2 winning
    } else if (p2Move == "rock" && p1Move == "scissors" || p2Move == "scissors" && p1Move == "paper" || p2Move == "paper" && p1Move =="rock"){
        p2Wins = p2Wins + 1;
        window.alert("Player 1 played " + JSON.parse(localStorage.getItem("player1Hand")) + ". " +
        "Computer played " + JSON.parse(localStorage.getItem("computerHand")) + ". " +
        "Computer is the winner!" + "Player 1 has " + p1Wins + " points. Player 2 has " + p2Wins + " points.")
        // resetHands()
        // console.log(player1.name + " played " + hands[p1Move] + ". ")
        // console.log(player2.name + " played " + hands[p2Move]+ ". ")
        // console.log(player2.name + " is the winner")
        return p2Move
//      // Sets condition for anything that might go wrong
    }else{
        window.alert("Please try again")
        // console.log("Please try again")
        return "Try again"
    
    }
}

let playRoundButton = document.getElementById("playRoundButton")
playRoundButton.addEventListener("click", playRound)

let resetButton = document.getElementById("resetButton")
resetButton.addEventListener("click", resetHands)

// let startButton = document.getElementById("startButton")
// startButton.addEventListener("click", initializeHands)
// resetHands()


