

humanScore = 0
computerScore = 0

function getComputerChoice() {
   let number = Math.random();
   if (number < 0.33) {
      return "Rock"
   } else if (number < 0.66) {
      return "Paper"
   } else {
      return "Scissor";
   }


}

console.log((getComputerChoice()));



function getHumanChoice() {
   const choiceButton = document.querySelector("#choiceButton");
   const log = document.querySelector("#log");

   choiceButton.addEventListener("click", () => {
      let choice = prompt("Whats your choice?");

      alert(playRound(choice, getComputerChoice()));
      
   })
   
}
console.log(getHumanChoice());



function playRound(humanChoice, computerChoice) {
   
    
   console.log((humanChoice))

   switch (humanChoice) {
      case "Rock":
         if (computerChoice === "Scissors")
            return "You win! Rock beats Scissors.";
         else if (computerChoice === "Paper") {
            return "You lose Paper beats Rock!";
         } else {
            return " It is a tie!"
         }

      case "Paper":
         if (computerChoice === "Rock")
            return "You win! Paper beats Rock.";
         else if (computerChoice === "Scissors") {
            return "You lose Scissors beats Paper!";
         } else {
            return " It is a tie!"
         }
      case "Scissors":
         if (computerChoice === "Paper")
            return "You win! Rock beats Scissors.";
         else if (computerChoice === "Rock") {
            return "You lose Rock beats Scissors!";
         } else {
            return " It is a tie!"
         }
      default:
         return "Invalid input. Please use 'Rock', 'Paper', 'Scissors'."
   }
  
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
    

playRound(humanSelection,computerSelection)