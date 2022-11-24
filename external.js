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
    return (playerSelection == 'Scissors' && computerSelection == 'Paper') ? console.log('win!')
        : (playerSelection == 'Scissors' && computerSelection == 'Rock') ? console.log('lose!')
            : (playerSelection == 'Paper' && computerSelection == 'Rock') ? console.log('win!')
                : (playerSelection == 'Paper' && computerSelection == 'Scissors') ? console.log('lose!')
                    : (playerSelection == 'Rock' && computerSelection == 'Scissors') ? console.log('win!')
                        : (playerSelection == 'Rock' && computerSelection == 'Paper') ? console.log('lose!')
                            : console.log('draw!');
}


