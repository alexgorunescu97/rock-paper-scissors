let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const reset_button = document.querySelector('.reset-button');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3)
  return choices[randomNumber];
}

function converToWord(letter) {
  switch (letter) {
    case 'r':
      return "Rock";
      break;
    case 'p':
      return "Paper";
      break;
    default:
      return "Scissors";
      break;
  }
}

function reset() {
  userScore = 0;
  compScore = 0;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${converToWord(userChoice)}(user) beats ${converToWord(computerChoice)}(comp). You win!`;
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 350);
}

function lose(userChoice, computerChoice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${converToWord(userChoice)}(user) loses ${converToWord(computerChoice)}(comp). You lose!`;
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 350);
}

function draw(userChoice, computerChoice) {
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = "It's a draw!";
  document.getElementById(userChoice).classList.add("gray-glow");
  setTimeout(function(){
    document.getElementById(userChoice).classList.remove("gray-glow");
  }, 350);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
      win(userChoice, computerChoice);
      break;

    case 'sp':
      win(userChoice, computerChoice);
      break;

    case 'pr':
      win(userChoice, computerChoice);
      break;

    case 'rp':
      lose(userChoice, computerChoice);
      break;

    case 'ps':
      lose(userChoice, computerChoice);
      break;

    case 'sr':
      lose(userChoice, computerChoice);
      break;

    default:
      draw(userChoice, computerChoice);
      break;

  }
}

function main() {
  rock_div.addEventListener('click', function() {
    game('r');
  });

  paper_div.addEventListener('click', function() {
    game('p');
  });

  scissors_div.addEventListener('click', function() {
    game('s');
  });

  reset_button.addEventListener('click', function(){
    reset();
  });
}

main();
