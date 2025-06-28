let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Update choices visually
  document.getElementById('player-choice').textContent = emojis[playerChoice];
  document.getElementById('computer-choice').textContent = emojis[computerChoice];

  // Decide result & update score
  let resultText = "";
  if (playerChoice === computerChoice) {
    resultText = "It's a draw!";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = "You win this round! 🎉";
    playerScore++;
    animateScore('player-score');
  } else {
    resultText = "Computer wins this round! 😢";
    computerScore++;
    animateScore('computer-score');
  }

  // Update result and scores on screen
  document.getElementById('result').textContent = resultText;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;

  // Check if someone reached 3 (best of 5)
  if (playerScore === 3 || computerScore === 3) {
    setTimeout(() => {
      if (playerScore === 3) {
        alert("🎉 You win the match!");
      } else {
        alert("😢 Computer wins the match!");
      }
      resetScores();
    }, 100); // slight delay so score updates before alert
  }
}

function animateScore(id) {
  const el = document.getElementById(id);
  el.classList.add('score-animate');
  setTimeout(() => el.classList.remove('score-animate'), 300);
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  document.getElementById('player-score').textContent = playerScore;
  document.getElementById('computer-score').textContent = computerScore;
  document.getElementById('result').textContent = "New match! Let's go!";
}
