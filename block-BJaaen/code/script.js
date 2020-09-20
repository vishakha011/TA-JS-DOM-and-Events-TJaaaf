// Algo for Rock Paper:
// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// (and as it always has) Rock crushes Scissors

let data = ['fa-hand-rock', 'fa-hand-paper', 'fa-hand-scissors', 'fa-hand-lizard', 'fa-hand-spock'];

// select or create the UI
let playerSelect = document.querySelectorAll('.player-select');
let displayPlayerScore = document.querySelector('#display-player-score');
let displayComputerScore = document.querySelector('#display-computer-score');
let selectedPlayerIcon = document.querySelector('.selected-player-icon');
let selectedComputerIcon = document.querySelector('.selected-computer-icon');
let result = document.querySelector('.result');
let reset = document.querySelector('.reset');

// score count variables
let playerScore = 0;
let computerScore = 0;


// Reset to original color
function resetIconsColor(){
    playerSelect.forEach((element) => element.style.color = "#1E90FF");

    document.querySelectorAll('.computer-icons > i').forEach((element) => element.style.color = "rgb(235, 43, 52)");
}

function handleClick(event){
    resetIconsColor()

    event.target.style.color = "black";

    // Random computer response on click
    let computerRandom = data[Math.floor(Math.random() * data.length)];
    let allComputerRandom = document.querySelectorAll(`.${computerRandom}`);
    allComputerRandom[1].style.color = "black";

    // assign the response and selected options to variables
    let computerPicked = allComputerRandom[1].dataset.picked;
    let playerPicked = event.target.dataset.picked;
    
    // Display selected options
    selectedPlayerIcon.innerText = `--- ${playerPicked}`;
    selectedComputerIcon.innerText = `--- ${computerPicked}`;

    console.log(`picked ones - ${playerPicked} ${computerPicked}`);


    // Conditions
    if(playerPicked === computerPicked){
        result.innerText = "Its a tie!"
    }

    switch(playerPicked) {
        case 'rock':
            if(computerPicked === 'scissors' || computerPicked === 'lizard') {
                result.innerText = 'You Won';
                playerScore += 1;
                displayPlayerScore.innerText = playerScore;
                console.log(`player-score ${playerScore}`)
            } else if (computerPicked === 'paper' || computerPicked === 'spock') {
                result.innerText = 'You Lost';
                computerScore += 1;
                displayComputerScore.innerText = computerScore;
                console.log(`computer-score ${computerScore}`)
            }
            break;

        case 'paper' :
            if(computerPicked === 'spock' || computerPicked === 'rock') {
                result.innerText = 'You Won';
                playerScore += 1;
                displayPlayerScore.innerText = playerScore;
                console.log(`player-score ${playerScore}`)
            } else if (computerPicked === 'scissors' || computerPicked === 'lizard') {
                result.innerText = 'You Lost';
                computerScore += 1;
                displayComputerScore.innerText = computerScore;
                console.log(`computer-score ${computerScore}`)
            }
            break;

        case 'scissors' :
            if(computerPicked === 'paper' || computerPicked === 'lizard') {
                result.innerText = 'You Won';
                playerScore += 1;
                displayPlayerScore.innerText = playerScore;
                console.log(`player-score ${playerScore}`)
            } else if (computerPicked === 'spock' || computerPicked === 'rock') {
                result.innerText = 'You Lost';
                computerScore += 1;
                displayComputerScore.innerText = computerScore;
                console.log(`computer-score ${computerScore}`)
            }
            break;

        case 'lizard' :
            if(computerPicked === 'spock' || computerPicked === 'paper') {
                result.innerText = 'You Won';
                playerScore += 1;
                displayPlayerScore.innerText = playerScore;
                console.log(`player-score ${playerScore}`)
            } else if (computerPicked === 'rock' || computerPicked === 'scissors') {
                result.innerText = 'You Lost';
                computerScore += 1;
                displayComputerScore.innerText = computerScore;
                console.log(`computer-score ${computerScore}`)
            }
            break;

        case 'spock' :
            if(computerPicked === 'scissors' || computerPicked === 'rock') {
                result.innerText = 'You Won';
                playerScore += 1;
                displayPlayerScore.innerText = playerScore;
                console.log(`player-score ${playerScore}`)
            } else if (computerPicked === 'lizard' || computerPicked === 'paper') {
                result.innerText = 'You Lost';
                computerScore += 1;
                displayComputerScore.innerText = computerScore;
                console.log(`computer-score ${computerScore}`)
            }
            break;
    }


}

playerSelect.forEach((icon) => {
    icon.addEventListener('click', handleClick);
});

function resetGame(){
    displayPlayerScore.innerText = 0;
    displayComputerScore.innerText = 0;
    selectedPlayerIcon.innerText = ``;
    selectedComputerIcon.innerText = ``;
    result.innerText = '';
}

reset.addEventListener('click', resetGame);