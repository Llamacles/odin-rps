let createText = (str) => {
    const display = document.querySelector('#display');

    const content = document.createElement('p');
    content.classList.add('display-result');
    content.textContent = str;

    display.appendChild(content);
};

let removeText = () => {
    const section = document.querySelector('#display');

    if (section.childNodes.length > 0) {
        const text = document.querySelectorAll('p');
        text.forEach((p) => {
            section.removeChild(p);
        });
    }
};

let hideButtons = () => {
    const btn = document.querySelectorAll('button');

    btn.forEach((button) => {
        button.setAttribute("hidden", true);
    });
    addResetButton();
};

let addResetButton = () => {
    const section = document.querySelector('#game-buttons');

    const btn = document.createElement('button');
    btn.textContent = "Play again?";
    section.insertBefore(btn, section.firstChild);

    btn.addEventListener('click', () => {
        const num = document.querySelector('.game-number');
        num.textContent = `0`;

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.removeAttribute("hidden"); 
        });

        section.removeChild(btn);
    });
};


let countGames = () => {
    const num = document.querySelector('.game-number');

    let count = Number(num.textContent) + 1;
    num.textContent = `${count.toString()}`;
    return count;
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

/*MAIN RPS FUNCTION*/
let playRound = (playerSelection, computerSelection) => {
    removeText();
    createText(`You chose ${playerSelection} and the computer chose ${computerSelection}.`);
    
    if (playerSelection === computerSelection)
        createText(`It's a tie! You both chose ${playerSelection}`);
    else {
        switch (playerSelection) {
            case "rock":
                (computerSelection === "paper") ? createText("You lose! Paper beats rock") : createText("You win! Rock beats scissors");
                break;
            case "paper":
                (computerSelection === "scissors") ? createText("You lose! Scissors beats paper") : createText("You win! Paper beats rock");
                break;
            case "scissors":
                (computerSelection === "rock") ? createText("You lose! Rock beats scissors") : createText("You win! Scissors beats paper");
                break;
        }
    }
    let gameNum = countGames();
    if (gameNum === 5) {
        createText("The game is over!");
        hideButtons();
    }
};