// Defines array for different hand sign options
const hands = ["rock", "paper", "scissors"];

// Generates a random hand sign
function getHand(x){
    return parseInt(Math.random(x)*10)%3;
}

// defines objects containing player name and move 
let player_one = {name: "A", getHand: 0}
let player_two = {name: "B", getHand: 0}
let player_three = {name: "C", getHand: 0}
let player_four = {name: "D", getHand:0}

// defines number of wins for each player
let p1Wins=0;
let p2Wins=0;

// Creates a playUntil Variable
// playUntil = 3

// Creates function taking two players as input
function playRound(player1, player2){
    // defines players moves 
    let p1Move = getHand(hands)
    let p2Move = getHand(hands)
    player1.getHand = p1Move
    player2.getHand = p2Move

    // sets condition for a tie
    if (p1Move == p2Move) {
        console.log(player1.name + " played " + hands[p1Move] + ". ")
        console.log(player2.name + " played " + hands[p2Move] + ". ")
        console.log("It is a tie.")
        return "null"
    // Sets conditions for player 1 winning
    }else if (p1Move == 0 && p2Move == 2 || p1Move > p2Move){
        p1Wins = p1Wins + 1;
        console.log(player1.name + " played " + hands[p1Move] + ". ")
        console.log(player2.name + " played " + hands[p2Move] + ". ")
        console.log(player1.name + " is the winner")
        return p1Move
    // Sets conditions for player 2 winning
    } else if (p2Move == 0 && p1Move == 3 || p2Move > p1Move){
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

// Code that cycles through until someone has 3 wins
// while(p1Wins < 3 && p2Wins < 3){
//     playRound(player1, player2);
//     console.log(player1.name + " has " + p1Wins + " wins.");
//     console.log(player2.name + " has " + p2Wins + " wins.");
// }

// Code that cycles through until someone has wins equal to playUntil
// while(p1Wins < playUntil && p2Wins < playUntil){
//         playRound(player1, player2);
//         console.log(player1.name + " has " + p1Wins + " wins.");
//         console.log(player2.name + " has " + p2Wins + " wins.");
//     }

// function that that runs game until playUntil is reached and returns winning hand.
// function playGame (player1, player2, playUntil){
//     while(p1Wins < playUntil && p2Wins < playUntil){
//         playRound(player1, player2);
//         console.log(player1.name + " has " + p1Wins + " wins.");
//         console.log(player2.name + " has " + p2Wins + " wins.");
//         if (p1Wins < p2Wins){
//             console.log (player1.name + " is the winner. " + player1.name + " played " + hands[player1.getHand])
//             let winner = player1;
//         }else{            
//             console.log(player2.name + " is the winner. "  + player2.name + " played " + hands[player2.getHand])
//             let winner = player2;
//         }
//     }
// }

// player.playHand doesn't work
function playGame (player1, player2, playUntil){
        if (p1Wins == playUntil){
            console.log (player1.name + " is the winner. " + player1.name + " played " + hands[player1.getHand] )
            p1Wins = 0;
            p2Wins = 0;
            player1.wins = true;
            player2.wins = false;
        }else if (p2Wins == playUntil){          
            console.log(player2.name + " is the winner. "  + player2.name + " played " + hands[player2.getHand])
            p1Wins = 0;
            p2Wins = 0;
            player2.wins = true;
            player1.wins = false;
        }else{
            playRound(player1, player2);
            playGame(player1, player2, playUntil)
        }
}

// playGame (player_one, player_two, 3);

// playGame (player_three, player_four, 3);
 
// function that takes 4 players and playUntil as arguments
function playTournament(player1, player2, player3, player4, playUntil){
    playGame(player1, player2, playUntil);
        
    playGame(player3, player4, playUntil);
        
    if (player1.wins == true && player3.wins == true){
        player1.wins = false;
        player2.wins = false;
        player3.wins = false;
        player4.wins = false;
        playGame(player1, player3, playUntil)
        if (player1.wins == true){
            console.log(player1.name + " is the world champion")
        } else if (player3.wins == true){
            console.log(player3.name + " is the world champion")
        } else{
            console.log("please try again")
            return
        }
    } else if (player1.wins == true && player4.wins == true){
        player1.wins = false;
        player2.wins = false;
        player3.wins = false;
        player4.wins = false;
        playGame(player1, player4, playUntil)
        if (player1.wins == true){
            console.log(player1.name + " is the world champion")
        } else if (player4.wins == true){
            console.log(player4.name + " is the world champion")
        } else{
            console.log("please try again")
            return
        }
    } else if(player2.wins == true && player3.wins == true){
        player1.wins = false;
        player2.wins = false;
        player3.wins = false;
        player4.wins = false;
        playGame(player2, player3, playUntil)
        if (player2.wins == true){
            console.log(player2.name + " is the world champion")
        } else if (player3.wins == true){
            console.log(player3.name + " is the world champion")
        } else{
            console.log("please try again")
            return
        }
    } else if(player2.wins == true && player4.wins == true){
        player1.wins = false;
        player2.wins = false;
        player3.wins = false;
        player4.wins = false;
        playGame(player2, player4, playUntil)
        if (player2.wins == true){
            console.log(player2.name + " is the world champion")
        } else if (player4.wins == true){
            console.log(player4.name + " is the world champion")
        } else{
            console.log("please try again")
            return
        }
    } else{
        console.log("please try again")
        return
    }
    // playGame("x","y", playUntil)
        
}
playTournament(player_one, player_two, player_three, player_four, 3)
