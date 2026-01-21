console.log("Game loaded successfully!");

function getComputerChoice() {
    const randomNum = Math.random();    // Get random number 0-1
    
    if (randomNum < 0.33) {
        return "rock";
    } else if (randomNum < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const input = prompt("Enter rock, paper or scissors");
    console.log("You entered:", input);
    return input.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log("Starting 5-round game!");

    function playRound(humanChoice, computerChoice) {
    console.log("Human Chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper");
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }

    console.log("Score - Human:", humanScore, "Computer:", computerScore);

    }

    // Round 1
    const humanChoice1 = getHumanChoice();
    const computerChoice1 = getComputerChoice();
    playRound(humanChoice1, computerChoice1);
    
    // Round 2
    const humanChoice2 = getHumanChoice();
    const computerChoice2 = getComputerChoice();
    playRound(humanChoice2, computerChoice2);

     // Round 3
    const humanChoice3 = getHumanChoice();
    const computerChoice3 = getComputerChoice();
    playRound(humanChoice3, computerChoice3);
    
    // Round 4
    const humanChoice4 = getHumanChoice();
    const computerChoice4 = getComputerChoice();
    playRound(humanChoice4, computerChoice4);

    //Round 5
    const humanChoice5 = getHumanChoice();
    const computerChoice5 = getComputerChoice();
    playRound(humanChoice5, computerChoice5);

    console.log("=== GAME OVER ===");
    console.log("Final Score - Human:", humanScore, "Computer:", computerScore);
    if (humanScore > computerScore) {
        console.log("🎉 You win the game!");
    } else if (computerScore > humanScore) {
        console.log("💻 Computer wins the game!");
    } else {
        console.log("🤝 It's a tie game!");
    }
}    

playGame();