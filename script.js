function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'Rock';
      break;
    case 1:
      return 'Paper';
      break;
    case 2:
      return 'Scissors';
      break;
  }
}

function getWinVerb(string) {
  switch (string) {
    case 'Rock':
      return ' smashes ';
      break;
    case 'Paper':
      return ' covers ';
      break;
    case 'Scissors':
      return ' cuts ';
      break;
  }
}

function playRound(playerMove, computerMove) {
  const tieGame = playerMove === computerMove;
  console.log('tieGame=' + tieGame);
  if (tieGame) {
    verb.textContent = 'Tie';
    andTheWinnerIs.textContent = '';
  } else {
    if (playerIsWinner(playerMove, computerMove)) {
      verb.textContent = playerMove + getWinVerb(playerMove) + computerMove;
      playerScore++;
    } else {
      verb.textContent = computerMove + getWinVerb(computerMove) + playerMove;
      computerScore++;
    }
  }
  updateScoreBoard();
  matchOver = 5 === playerScore || 5 === computerScore;
  console.log('matchOver=' + matchOver);
  if (matchOver) {
    if (5 === playerScore) {
      andTheWinnerIs.textContent = 'You win!';
    }
    if (5 === computerScore) {
      andTheWinnerIs.textContent = 'Computer wins!';
    }
  }
}

function playerIsWinner(playerMove, computerMove) {
  switch (playerMove) {
    case 'Rock':
      if (computerMove == 'Scissors') {
        return true;
      }
      break;
    case 'Paper':
      if (computerMove == 'Rock') {
        return true;
      }
      break;
    case 'Scissors':
      if (computerMove == 'Paper') {
        return true;
      }
      break;
  }
  return false;
}

function updateScoreBoard() {
  const scoreForPlayer = document.querySelector('.forPlayer');
  const scoreForComputer = document.querySelector('.forComputer');
  scoreForPlayer.textContent = playerScore;
  scoreForComputer.textContent = computerScore;
}

for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());
}

const verb = document.querySelector('.verb');
const andTheWinnerIs = document.querySelector('.andTheWinnerIs');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (matchOver) {
      playerScore = 0;
      computerScore = 0;
      matchOver = false;
    }
    playRound(button.id, getComputerChoice());
  });
});

verb.textContent = "Let's Play!";
andTheWinnerIs.textContent = '';
let playerScore = 0;
let computerScore = 0;
let matchOver = false;
