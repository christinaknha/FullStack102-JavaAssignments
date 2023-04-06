// Defines array for different hand sign options
const hands = ["rock", "paper", "scissors"];

// Generates a random hand sign
function getHand(x){
    return parseInt(Math.random(x)*10)%3;
}

// defines objects containing player name and move 
let player1 = {name: "A", getHand}
let player2 = {name: "B", getHand}

// defines number of wins for each player
let p1Wins=0;
let p2Wins=0;

// defines whether player win was true or false
// let winner1 = false;
// let winner2 = false;

// Creates function taking two players as input
function playRound(player1, player2){
    // defines players moves 
    let p1Move = getHand(hands)
    let p2Move = getHand(hands)

    // sets condition for a tie
    if (p1Move == p2Move) {
        // winner1 = false;
        // winner2 = false;
        console.log(player1.name + " played " + hands[p1Move] + ". ")
        console.log(player2.name + " played " + hands[p2Move] + ". ")
        console.log("It is a tie.")
        return "null"
    // Sets conditions for player 1 winning
    }else if (p1Move == 0 && p2Move == 2 || p1Move > p2Move){
        // winner1 = true;
        // winner2 = false;
        p1Wins = p1Wins + 1;
        console.log(player1.name + " played " + hands[p1Move] + ". ")
        console.log(player2.name + " played " + hands[p2Move] + ". ")
        console.log(player1.name + " is the winner")
        return p1Move
    // Sets conditions for player 2 winning
    } else if (p2Move == 0 && p1Move == 3 || p2Move > p1Move){
        // winner1 = false;
        // winner2 = true; 
        p2Wins = p2Wins + 1;
        console.log(player1.name + " played " + hands[p1Move] + ". ")
        console.log(player2.name + " played " + hands[p2Move]+ ". ")
        console.log(player2.name + " is the winner")
        return p2Move
     // Sets condition for anything that might go wrong
    }else{
        console.log("Please try again")
        return "Try again"
    
    }
}
playRound(player1,player2)
while(p1Wins < 3 && p2Wins < 3){
    playRound(player1, player2)
    console.log(p1Wins, p2Wins)
}
// do{
//     playRound(player1, player2)
//     if(winner1 == true && winner2 == false){
//         p1Wins = p1Wins + 1;
//     } else if (winner2 == true && winner1 == false){
//         p2Wins = p2Wins + 1;
//     }else{
//         p1Wins = p1Wins;
//         p2Wins = p2Wins;
//     }
// } while(p1Wins < 3 && p2Wins < 3);

// for (let i=0; i<=100; i++){
//     playRound(player1, player2)
//     if (p1Wins < 3 && p2Wins < 3){
//         console.log("Current score: " + p1Wins, p2Wins)
//     }else if (p1Wins ==3){
//         console.log(player1.name + " is the winner")
//     }else if (p2Wins == 3){
//         console.log(player2.name + " is the winner!")
//         break;
//     }else{
//         break;
// }



// for (let i=0; i<=100; i++){
//     if (p1Wins < 3 && p2Wins < 3){
//         playRound(player1, player2)
//         console.log(p1Wins, p2Wins)
//     }else if (p1Wins ==3){
//         console.log(p1Wins, p2Wins)
//     }else if (p2Wins == 3){
//         console.log(p1Wins, p2Wins)
//     }else{
//         console.log("Something Went Wrong")
//     }
// }

// if(p1Wins < 3 && p2Wins < 3){
//     playRound(player1, player2)
//     if(winner1 == true && winner2 == false){
//         p1Wins = p1Wins + 1;
//     } else if (winner2 == true && winner1 == false){
//         p2Wins = p2Wins + 1;
//     }else{
//         p1Wins = p1Wins;
//         p2Wins = p2Wins;
//     }
//     console.log(p1Wins, p2Wins)
// } else if (p1Wins ==3){
//     console.log(p1Wins, p2Wins)
// } else if (p2Wins == 3){
//     console.log(p1Wins, p2Wins)
// } else{
//     console.log ("something went wrong.")
// }
