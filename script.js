let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.getElementById('results');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "rock";
    if (randomNum < 0.66) return "paper";
    return "scissors";
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    
    resultsDiv.innerHTML = '';
    
    const choiceDisplay = document.createElement('p');
    choiceDisplay.textContent = `> PLAYER: ${humanChoice.toUpperCase()} | CPU: ${computerChoice.toUpperCase()}`;
    resultsDiv.appendChild(choiceDisplay);
    
    const resultDisplay = document.createElement('p');
    
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "> TIE";
        resultsDiv.appendChild(resultDisplay);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent = "> PLAYER WINS";
        humanScore++;
        playerScoreSpan.textContent = humanScore;
        resultsDiv.appendChild(resultDisplay);
    } else {
        resultDisplay.textContent = "> CPU WINS";
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        resultsDiv.appendChild(resultDisplay);
    }
    
    checkWinner();
}

function checkWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winnerDisplay = document.createElement('h2');
        winnerDisplay.textContent = humanScore === 5 ? "PLAYER WINS GAME" : "CPU WINS GAME";
        resultsDiv.appendChild(winnerDisplay);
        
        document.querySelectorAll('.game-btn').forEach(btn => {
            btn.disabled = true;
        });
        
        const restartBtn = document.createElement('button');
        restartBtn.textContent = "PLAY AGAIN";
        restartBtn.onclick = restartGame;
        resultsDiv.appendChild(restartBtn);
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    resultsDiv.innerHTML = "<p>> MAKE YOUR SELECTION</p>";
    
    document.querySelectorAll('.game-btn').forEach(btn => {
        btn.disabled = false;
    });
}

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));