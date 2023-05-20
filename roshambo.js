function main(){
    const choices = [('Rock'), ('Paper'), ('Scissors')];

    function getComputerChoice() {
        x = Math.floor(Math.random() * choices.length);
        return choices.at(x)
    }


    function appendScores() {
        const pScoreFluid = document.querySelector(".pScoreFluid");
        pScoreFluid.innerHTML = playerScore;
        const cScoreFluid = document.querySelector(".cScoreFluid");
        cScoreFluid.innerHTML = computerScore;
        const gameTotal = document.querySelector(".gameTotal");
        gameTotal.innerHTML = gameScore;
    }

    function finalScores() {
        const finalPlayerScore = document.querySelector(".finalPlayerScore");
        finalPlayerScore.innerHTML = playerScore;
        const finalComputerScore = document.querySelector(".finalComputerScore");
        finalComputerScore.innerHTML = computerScore;
        const standMsg = document.querySelector(".standMsg");
        if (playerScore > computerScore){
            standMsg.innerHTML = "You Win!";
            document.getElementById("result").src="./images/winner.png";
        } else if (playerScore < computerScore){
            standMsg.innerHTML = "You Lose!";
            document.getElementById("result").src="./images/loser.png";
        } else if (playerScore === computerScore){
            standMsg.innerHTML = "It's a Draw!";
            document.getElementById("result").src="./images/tie.png";
        }
    }   


    let computerScore = 0;
    let playerScore = 0;
    let gameScore = 0;
    let playerChoice = null;
    let computerChoice = null;
    appendScores(); 


    function openPopup() {
        finalScores();
        if (gameScore === 5){
            let popup = document.querySelector(".popup");
            popup.classList.add("openPopup");
        }
    }

    function closePopup() {
        let popup = document.querySelector(".popup");
        popup.classList.remove("openPopup");
        main();
    }

    const reset = document.querySelector(".reset");
    reset.addEventListener('click', () => {
        closePopup();
    });


    function addPlayerHighlight() {
        if (playerChoice === choices.at(0)){
            let Rock = document.querySelector('.Rock');
            Rock.classList.add("playerChoiceHighlight");
        } else if (playerChoice === choices.at(1)){
            let Paper = document.querySelector('.Paper');
            Paper.classList.add("playerChoiceHighlight");
        } else if (playerChoice === choices.at(2)){
            let Scissors = document.querySelector('.Scissors');
            Scissors.classList.add("playerChoiceHighlight");
        };
    }


    function addComputerHighlight(){
        if (computerChoice === choices.at(0) && computerChoice !== playerChoice){
            let Rock = document.querySelector('.Rock');
            Rock.classList.add("computerChoiceHighlight");
        } else if (computerChoice === choices.at(1) && computerChoice !== playerChoice){
            let Paper = document.querySelector('.Paper');
            Paper.classList.add("computerChoiceHighlight");
        } else if (computerChoice === choices.at(2) && computerChoice !== playerChoice){
            let Scissors = document.querySelector('.Scissors');
            Scissors.classList.add("computerChoiceHighlight");
        } else if (computerChoice === playerChoice){
            if (computerChoice === choices.at(0)){
                let Rock = document.querySelector('.Rock');
                Rock.classList.add("ifDrawHighlight");
            } else if (computerChoice === choices.at(1)){
                let Paper = document.querySelector('.Paper');
                Paper.classList.add("ifDrawHighlight");
            } else if (computerChoice === choices.at(2)){
                let Scissors = document.querySelector('.Scissors');
                Scissors.classList.add("ifDrawHighlight");
            }
        } 
    }     


    function removeHighlights(){
        let Rock = document.querySelector('.Rock');
        Rock.classList.remove("playerChoiceHighlight","computerChoiceHighlight","ifDrawHighlight");
        let Paper = document.querySelector('.Paper');
        Paper.classList.remove("playerChoiceHighlight","computerChoiceHighlight","ifDrawHighlight");
        let Scissors = document.querySelector('.Scissors');
        Scissors.classList.remove("playerChoiceHighlight","computerChoiceHighlight","ifDrawHighlight");
    };



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
        appendScores();
        openPopup();    
        console.log(computerChoice, computerScore)
    }


    function game() {
        const posSelect = document.querySelectorAll('.posSelect');
        posSelect.forEach((posSelect)=>{
            posSelect.addEventListener("click", () => {
                if (posSelect.querySelector('.Rock') !== null){ 
                    removeHighlights();               
                    playerChoice = choices.at(0);
                    addPlayerHighlight();
                    computerChoice = getComputerChoice();
                    addComputerHighlight();
                    battle();
                } else if (posSelect.querySelector('.Paper') !== null){  
                    removeHighlights();                 
                    playerChoice = choices.at(1);
                    addPlayerHighlight();
                    computerChoice = getComputerChoice();
                    addComputerHighlight();
                    battle();
                } else if (posSelect.querySelector('.Scissors') !== null){   
                    removeHighlights();                
                    playerChoice = choices.at(2);
                    addPlayerHighlight();
                    computerChoice = getComputerChoice();
                    addComputerHighlight();
                    battle();
                }
            });
        });
    }

    removeHighlights();
    game();
}
main()