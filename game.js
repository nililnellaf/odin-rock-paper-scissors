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

function playGame() {

    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Draw game! both " + humanChoice)
        } else if ((humanChoice === "rock" && computerChoice === "paper")
            || (humanChoice === "paper" && computerChoice === "scissors")
            || (humanChoice === "rock" && computerChoice === "paper")) {
            console.log("You lose! " +
                capitalizeFirstLetter(computerChoice) + " beats " + capitalizeFirstLetter(humanChoice));
            computerScore++;
        } else {
            console.log("You win! " +
                capitalizeFirstLetter(humanChoice) + " beats " + capitalizeFirstLetter(computerChoice));
            humanScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if (computerScore === humanScore) {
        console.log(`Draw game! Computer: ${computerScore} Human: ${humanScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins! Computer: ${computerScore} Human: ${humanScore}`);
    } else {
        console.log(`Human wins! Computer: ${computerScore} Human: ${humanScore}`);
    }

}

(function () {
    "use strict";
    playGame();
})();