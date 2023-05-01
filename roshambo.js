const choices = [('Rock'), ('Paper'), ('Scissors')];

function getComputerChoice() {
    return Math.floor(Math.random() * choices.length) + 1;
}

let computerScore = 0;
let playerScore = 0;
let gameScore = 0;

while (gameScore < 5) {
    let playerChoice = choices.at(prompt('1. Rock? \n2. Paper? \n3. Scissors?') -1);
    let computerChoice = choices.at(getComputerChoice() - 1);
    if (computerChoice === choices[0] && (playerChoice) === choices[0]) {
        alert("Your Rock against their Rock, you draw... ");
        gameScore = gameScore += 1;
    } else if (computerChoice === choices[0] && (playerChoice) === choices[1]) {
        alert("Your Paper against their Rock, you win! ");
        gameScore = gameScore += 1;
        playerScore = playerScore += 1;
    } else if (computerChoice === choices[0] && (playerChoice) === choices[2]) {
        alert("Your Scissors against their Rock, you lose! ");
        gameScore = gameScore += 1;
        computerScore = computerScore +=1
    } else if (computerChoice === choices[1] && (playerChoice) === choices[0]) {
        alert("Your Rock against their Paper, you lose! ");
        gameScore = gameScore += 1;
        computerScore = computerScore +=1
    } else if (computerChoice === choices[1] && (playerChoice) === choices[1]) {
        alert("Your Paper against their Paper, you draw... ");
        gameScore = gameScore += 1;
    } else if (computerChoice === choices[1] && (playerChoice) === choices[2]) {
        alert("Your Scissors against their Paper, you win! ");
        gameScore = gameScore += 1;
        playerScore = playerScore += 1;
    } else if (computerChoice === choices[2] && (playerChoice) === choices[0]) {
        alert("Your Rock against their Scissors, you win! ");
        gameScore = gameScore += 1;
        playerScore = playerScore += 1;
    } else if (computerChoice === choices[2] && (playerChoice) === choices[1]) {
        alert("Your Paper against their Scissors, you lose! ");
        gameScore = gameScore += 1;
        computerScore = computerScore +=1
    } else if (computerChoice === choices[2] && (playerChoice) === choices[2]) {
        alert("Your Scissors against their Scissors, you draw... ");
        gameScore = gameScore += 1;
    } else {
        alert("Something's fucked up. Input 1, 2, or 3. ")
    }
}

if (playerScore > computerScore){
    alert("You Win!")
} else if (computerScore > playerScore){
    alert ("You Lose!")
} else {
    alert ("It's a Draw!")
}