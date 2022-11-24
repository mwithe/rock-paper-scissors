let playerChoice = prompt('Enter Rock, Paper, or Scissors');
let computerChoice = getComputerChoice();

playRound(playerChoice, computerChoice);

function getComputerChoice() {
    let choice;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            choice = 'Rock';
            break;

        case 1:
            choice = 'Paper';
            break;

        case 2:
            choice = 'Scissors';
            break;
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    console.log('Player Selection: ', playerSelection)
    console.log('Computer Selection: ', computerSelection)

    let playerPoint = 0;
    let computerPoint = 0;

    if ((playerSelection == 'Scissors' && computerSelection == 'Paper') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Rock' && computerSelection == 'Scissors')) {

        console.log('player wins round!');
        playerPoint = 1;
        return playerPoint;
    }

    else if ((playerSelection == 'Scissors' && computerSelection == 'Rock') ||
        (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
        (playerSelection == 'Rock' && computerSelection == 'Paper')) {

        console.log('computer wins round!');
        computerPoint = 1;
        return computerPoint;
    }

    else {
        console.log('draw!');
    }
}


