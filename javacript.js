const TOTAL_ROUNDS = 5;

const btn = document.querySelectorAll('button');

btn.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.id);
    });
});

let getComputerChoice = () => Math.floor(Math.random() * 3);

let playerSelection = () => {
    let input = prompt("Rock Paper Scissors!\nWhat is your selection?");
    return input.toLowerCase();
};

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
    console.log("You chose '" + playerSelection + "' and the computer chose '" + computerSelection + "'.") 
    
    if (playerSelection === computerSelection) {
        console.log("It's a tie! You both chose " + playerSelection);
        return 0;
    }

    switch (playerSelection) {
        case "rock":
            (computerSelection === "paper") ? console.log("You lose! Paper beats rock") : console.log("You win! Rock beats scissors");
            return (computerSelection === "paper") ? -1 : 1;
        case "paper":
            (computerSelection === "scissors") ? console.log("You lose! Scissors beats paper") : console.log("You win! Paper beats rock");
            return (computerSelection === "scissors") ? -1 : 1;
        case "scissors":
            (computerSelection === "rock") ? console.log("You lose! Rock beats scissors") : console.log("You win! Scissors beats paper");
            return (computerSelection === "rock") ? -1 : 1;
        default: 
            console.log("Please enter 'rock', 'paper', or 'scissors'");
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
//     console.log("Computer's wins: " + computerWins);
//     console.log("Your wins: " + playerWins);

//     return (computerWins === playerWins) ? "It's a tie!" : (computerWins > playerWins) ? "You Lose!" : "You Win!"
// };