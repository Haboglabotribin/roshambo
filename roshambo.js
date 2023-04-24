const choices = [('Rock'), ('Paper'), ('Scissors')];

function getComputerChoice() {
    return Math.floor(Math.random() * choices.length) + 1;
}

let computerChoice = choices.at(getComputerChoice() - 1);
let playerChoice = choices.at(prompt('1. Rock? \n2. Paper? \n3. Scissors?') -1);

if (computerChoice === choices[0] && (playerChoice) === choices[0]) {
    alert("Your Rock against their Rock, you draw...");
} else if (computerChoice === choices[0] && (playerChoice) === choices[1]) {
    alert("Your Paper against their Rock, you win!");
} else if (computerChoice === choices[0] && (playerChoice) === choices[2]) {
    alert("Your Scissors against their Rock, you lose!");
} else if (computerChoice === choices[1] && (playerChoice) === choices[0]) {
    alert("Your Rock against their Paper, you lose!");
} else if (computerChoice === choices[1] && (playerChoice) === choices[1]) {
    alert("Your Paper against their Paper, you draw...");
} else if (computerChoice === choices[1] && (playerChoice) === choices[2]) {
    alert("Your Scissors against their Paper, you win!");
} else if (computerChoice === choices[2] && (playerChoice) === choices[0]) {
    alert("Your Rock against their Scissors, you win!");
} else if (computerChoice === choices[2] && (playerChoice) === choices[1]) {
    alert("Your Paper against their Scissors, you lose!");
} else if (computerChoice === choices[2] && (playerChoice) === choices[2]) {
    alert("Your Scissors against their Scissors, you draw...");
} else {
    alert("Something's fucked up")
}