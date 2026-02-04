// Global Scores
let humanScore = 0;
let computerScore = 0;

// DOM Elements
const resultsDiv = document.getElementById('results');
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');

// Emoji mapping
const emojiMap = {
    'rock': '🪨',
    'paper': '📄',
    'scissors': '✂️'
};

// Computer Choice
function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33) return "rock";
    else if (randomNum < 0.66) return "paper";
    else return "scissors"; 
}

// Play A Single Round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    // Clear Previous Results
    resultsDiv.innerHTML = '';

    // Create result elements
    const choiceDisplay = document.createElement('p');
    choiceDisplay.innerHTML = `You chose: ${emojiMap[humanChoice]} | Computer chose: ${emojiMap[computerChoice]}`;
    resultsDiv.appendChild(choiceDisplay);

    const resultDisplay = document.createElement('p');

    // Game Logic
    if (humanChoice === computerChoice) {
        resultDisplay.textContent = "Its a tie!";
        resultDisplay.style.color = "orange";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultDisplay.textContent = `You win! ${emojiMap[humanChoice]} beats ${emojiMap[computerChoice]}`;
        resultDisplay.style.color = "green";
        humanScore++;
        playerScoreSpan.textContent = humanScore;
    } else {
        resultDisplay.textContent = `You lose! ${emojiMap[computerChoice]} beats ${emojiMap[humanChoice]}`;
        resultDisplay.style.color = "red";
        computerScore++;
        computerScoreSpan.textContent = computerScore;
    }

    resultsDiv.appendChild(resultDisplay);

    checkForWinner();
}

// Check If Someone Reached 5 Points
function checkForWinner() {
    if (humanScore === 5 || computerScore === 5) {
        const winnerDisplay = document.createElement('h2');

        if (humanScore === 5) {
            winnerDisplay.textContent = "🎉 You win the game!";
            winnerDisplay.style.color = "green";
        } else {
            winnerDisplay.textContent = "💻 Computer wins the game!";
            winnerDisplay.style.color = "red";
        }

        resultsDiv.appendChild(winnerDisplay);

        // Disable Buttons After Game Ends
        document.querySelectorAll('.buttons button').forEach(button => {
            button.disabled = true;
            button.style.opacity = "0.5";
        });

        const restartButton = document.createElement('button');
restartButton.textContent = "Play Again";
restartButton.onclick = restartGame;

// Add CSS for centering and styling
restartButton.style.cssText = `
    display: block;
    margin: 20px auto 0 auto;
    padding: 12px 30px;
    font-size: 1.5rem;
    font-family: 'Bubblegum Sans', cursive;
    background: linear-gradient(45deg, #FF6B6B, #FFD166);
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
`;

// Add hover effect
restartButton.addEventListener('mouseenter', () => {
    restartButton.style.transform = 'scale(1.05)';
    restartButton.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
});

restartButton.addEventListener('mouseleave', () => {
    restartButton.style.transform = 'scale(1)';
    restartButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});

// Create a container div to center it
const buttonContainer = document.createElement('div');
buttonContainer.style.textAlign = 'center';
buttonContainer.style.marginTop = '20px';
buttonContainer.appendChild(restartButton);

resultsDiv.appendChild(buttonContainer);
    }
}

// Restart Game Function
function restartGame() {
    humanScore = 0;
    computerScore = 0;
    playerScoreSpan.textContent = "0";
    computerScoreSpan.text = "0";
    resultsDiv.innerHTML = "<p>Make your selection to start playing!</p>";

    // Re-enable buttons
    document.querySelectorAll('.buttons button').forEach(button => {
        button.disabled = false;
        button.style.opacity = "1";
    });
}

// Button Event Listeners
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));