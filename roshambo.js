const choices = [('Rock'), ('Paper'), ('Scissors')];

function getComputerChoice() {
    x = Math.floor(Math.random() * choices.length);
    return choices.at(x)
}


let computerScore = 0;
let playerScore = 0;
let gameScore = 0;
let playerChoice = null;
let computerChoice = null;



function standings() {
    
}


function appendScores() {
    const pScoreFluid = document.querySelector(".pScoreFluid");
    pScoreFluid.innerHTML = playerScore;
    const cScoreFluid = document.querySelector(".cScoreFluid");
    cScoreFluid.innerHTML = computerScore;
    const gameTotal = document.querySelector(".gameTotal");
    gameTotal.innerHTML = gameScore;
}



function battle() {
    if (playerChoice === 'Rock' && computerChoice === 'Paper'){
        computerScore = computerScore +1; gameScore = gameScore +1;
    } else if (playerChoice === 'Rock' && computerChoice === 'Rock'){
        gameScore = gameScore +1;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors'){
        playerScore = playerScore +1; gameScore = gameScore +1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Paper'){
        gameScore = gameScore +1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Rock'){
        playerScore = playerScore +1; gameScore = gameScore +1;
    } else if (playerChoice === 'Paper' && computerChoice === 'Scissors'){
        computerScore = computerScore +1; gameScore = gameScore +1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Paper'){
        playerScore = playerScore +1; gameScore = gameScore +1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Rock'){
        computerScore = computerScore +1; gameScore = gameScore +1;
    } else if (playerChoice === 'Scissors' && computerChoice === 'Scissors'){
        gameScore = gameScore +1;
    } else {
        alert ("someting wong")
    }
    console.log(gameScore, playerScore, computerScore)
    appendScores()
}


function game() {
    const posSelect = document.querySelectorAll('.posSelect');
    posSelect.forEach((posSelect)=>{
        posSelect.addEventListener("click", () => {
            if (posSelect.querySelector('.Rock') !== null){
                playerChoice = choices.at(0);
                computerChoice = getComputerChoice();
                battle();
            } else if (posSelect.querySelector('.Paper') !== null){
                playerChoice = choices.at(1);
                computerChoice = getComputerChoice();
                battle();
            } else if (posSelect.querySelector('.Scissors') !== null){
                playerChoice = choices.at(2);
                computerChoice = getComputerChoice();
                battle();
            }
        });
    });
}




if (gameScore < 5){
game()
}
