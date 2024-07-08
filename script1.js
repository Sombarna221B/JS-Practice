let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const result_p = document.querySelector('.result p');
const choices = document.querySelectorAll('.choice');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.textContent = userScore;
    result_p.textContent = capitalizeFirstLetter(userChoice)+" beats "+ computerChoice + ". You win!";
    document.getElementById(userChoice).classList.add('win-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('win-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.textContent = computerScore;
    result_p.textContent = capitalizeFirstLetter(computerChoice)+" beats "+ userChoice + ". You lose.";
    document.getElementById(userChoice).classList.add('lose-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('lose-glow'), 300);
}

function draw(userChoice, computerChoice) {
    result_p.textContent = capitalizeFirstLetter(userChoice)+" equals "+ computerChoice + ". It's a draw.";
    document.getElementById(userChoice).classList.add('draw-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('draw-glow'), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    choices.forEach(choice => choice.addEventListener('click', function() {
        game(this.id);
    }));
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

main();