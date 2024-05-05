const choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let humanChoice = prompt("Rock/paper/scissors?").toLowerCase();
    while (isInvalid(humanChoice)) {
        humanChoice = prompt("Invalid choice, rock/paper/scissors?").toLowerCase();
    }
    return humanChoice;
}

function isInvalid(choice) {
    return !choices.includes(choice);
}

function capitalizeFirstLetter(s) {
    if (s.length > 0) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    return s;
}


let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
    let result = document.querySelector(".result");
    if (humanChoice === computerChoice) {
        result.textContent = "Draw game! both " + humanChoice;
    } else if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "rock" && computerChoice === "paper")) {
        result.textContent = "You lose! " +
            capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice);
        computerScore++;
    } else {
        result.textContent = "You win! " +
            capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice);
        humanScore++;
    }

    let score = document.querySelector(".score");
    score.textContent = `Computer: ${computerScore} Human: ${humanScore}`;
    if (computerScore >= 5) {
        score.textContent += ". Computer wins!"
        computerScore = humanScore = 0;
    } else if (humanScore >= 5) {
        score.textContent += ". Human wins!"
        computerScore = humanScore = 0;
    }

}

(function () {
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");
    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
})();