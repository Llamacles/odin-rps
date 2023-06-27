const TOTAL_ROUNDS = 5;

let createText = (str) => {
    const display = document.querySelector('#display');

    const content = document.createElement('p');
    content.classList.add('display-result');
    content.textContent = str;

    display.appendChild(content);
};

/*HANDLE PLAYER SELECTION*/
const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerSelection());
    });
});

/*HANDLE COMPUTER RNG SELECTION*/
let getComputerChoice = () => Math.floor(Math.random() * 3);

let computerSelection = () => {
    switch (getComputerChoice()) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
};

let playRound = (playerSelection, computerSelection) => {

    createText(`You chose ${playerSelection} and the computer chose ${computerSelection}.`);
    
    if (playerSelection === computerSelection) {
        createText(`It's a tie! You both chose ${playerSelection}`);
        return 0;
    }

    switch (playerSelection) {
        case "rock":
            (computerSelection === "paper") ? createText("You lose! Paper beats rock") : createText("You win! Rock beats scissors");
            return (computerSelection === "paper") ? -1 : 1;
        case "paper":
            (computerSelection === "scissors") ? createText("You lose! Scissors beats paper") : createText("You win! Paper beats rock");
            return (computerSelection === "scissors") ? -1 : 1;
        case "scissors":
            (computerSelection === "rock") ? createText("You lose! Rock beats scissors") : createText("You win! Scissors beats paper");
            return (computerSelection === "rock") ? -1 : 1;
        default: 
            createText("Please enter 'rock', 'paper', or 'scissors'");
            return playRound(playerSelection(), computerSelection());
    }
};

// let game = () => {
//     let computerWins = 0;
//     let playerWins = 0;

//     for (let i = 0; i < TOTAL_ROUNDS; i++) {
//         switch (playRound(playerSelection(), computerSelection())) {
//             case -1:
//                 computerWins++;
//                 break;
//             case 1:
//                 playerWins++;
//                 break;
//         }
//     }
//     createText("Computer's wins: " + computerWins);
//     createText("Your wins: " + playerWins);

//     return (computerWins === playerWins) ? "It's a tie!" : (computerWins > playerWins) ? "You Lose!" : "You Win!"
// };