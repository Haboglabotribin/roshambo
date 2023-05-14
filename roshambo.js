const choices = [('Rock'), ('Paper'), ('Scissors')];

function getComputerChoice() {
    return Math.floor(Math.random() * choices.length) + 1;
}

let computerScore = 0;
let playerScore = 0;
let gameScore = 0;
playerChoice = null


const posSelect = document.querySelectorAll('.posSelect');

// cannot return playerChoice with choices value from functions... 
function retrieveSelect(){
    posSelect.forEach((posSelect)=>{
        posSelect.addEventListener("click", (e) =>{
            if (posSelect.querySelector('.Rock') !== null) {
                console.log("rock");
                let playerChoice = choices.at(0)
                console.log(playerChoice)
            } else if (posSelect.querySelector('.Paper') !== null) {
                console.log("paper");
                let playerChoice = choices.at(1)
                return playerChoice;
            } else if (posSelect.querySelector('.Scissors') !== null) {
                console.log("scissors");
                let playerChoice = choices.at(2)
                return playerChoice;
            }
        console.log(playerChoice);
        return playerChoice;
        });
    });
}


function turn(){
    retrieveSelect();
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

turn()
console.log(playerChoice)