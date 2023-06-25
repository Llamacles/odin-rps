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
