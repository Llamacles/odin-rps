let createText = (str, section, cssClass) => {
    const container = document.querySelector(section);

    const content = document.createElement('p');
    content.classList.add(cssClass);
    content.textContent = str;

    container.appendChild(content);
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
    const playerWins = document.querySelector('#player-wins');
    const computerWins = document.querySelector('#computer-wins');

    const btn = document.createElement('button');
    btn.textContent = "Play again?";
    section.insertBefore(btn, section.firstChild);

    btn.addEventListener('click', () => {
        const num = document.querySelector('#game-number');
        num.textContent = `0`;
        playerWins.textContent = `0`;
        computerWins.textContent = `0`;

        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.removeAttribute("hidden"); 
        });
        resetLayout();
        section.removeChild(btn);
    });
};


let countGames = () => {
    const num = document.querySelector('#game-number');

    let count = Number(num.textContent) + 1;
    num.textContent = `${count.toString()}`;
    return count;
};

let resetLayout = () => {
        const text = document.querySelectorAll('p');
        text.forEach((p) => {
            p.remove();
        });
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
    const playerWins = document.querySelector('#player-wins');
    const computerWins = document.querySelector('#computer-wins');

    resetLayout();
    createText(`You chose: ${playerSelection}`, '#player-display', 'display-results');
    createText(`VS`, '#versus', 'versus-text');
    createText(`Computer chose: ${computerSelection}`, '#computer-display', 'display-results');
    
    if (playerSelection === computerSelection)
        createText(`It's a tie! You both chose ${playerSelection}`, '#results', 'display-results');
    else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "paper") {
                    createText("You lose! Paper beats rock", '#results', 'display-results');
                    computerWins.textContent = `${Number(computerWins.textContent) + 1}`;
                } else { 
                    createText("You win! Rock beats scissors", '#results', 'display-results');
                    playerWins.textContent = `${Number(playerWins.textContent) + 1}`;
                }
                break;
            case "paper":
                if (computerSelection === "scissors") {
                    createText("You lose! Scissors beats paper", '#results', 'display-results');
                    computerWins.textContent = `${Number(computerWins.textContent) + 1}`; 
                } else {
                    createText("You win! Paper beats rock", '#results', 'display-results');
                    playerWins.textContent = `${Number(playerWins.textContent) + 1}`;
                }
                break;
            case "scissors":
                if (computerSelection === "rock") {
                    createText("You lose! Rock beats scissors", '#results', 'display-results')
                    computerWins.textContent = `${Number(computerWins.textContent) + 1}`;
                } else {
                    createText("You win! Scissors beats paper", '#results', 'display-results');
                    playerWins.textContent = `${Number(playerWins.textContent) + 1}`;
                }
                break;
        }
    }
    let gameNum = countGames();
    if (gameNum === 5) {
        hideButtons();
        resetLayout();
        if (Number(playerWins.textContent) === Number(computerWins.textContent)) {
            createText("It's a tie!", '#results', 'final-results');
            return 0;
        }

        if (Number(playerWins.textContent) > Number(computerWins.textContent)){ 
            createText("You win!", '#results', 'final-results');
        } else {
            createText("You lose!", '#results', 'final-results');
        }
    }
};