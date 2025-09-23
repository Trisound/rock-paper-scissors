



function getComputerChoice() {
   let number = Math.random();
   if (number < 0.33) {
      return "rock"
   } else if (number < 0.66) {
      return "paper"
   } else {
      return "scissor";
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
   const normalizedhumanChoice = String(humanChoice).toLowerCase();

   if (["rock","r"].includes(humanChoice)) return "rock";
   if (["paper","p"].includes(humanChoice)) return "paper";
   if (["scissors","s"].includes(humanChoice)) return "scissors";

   switch (normalizedhumanChoice) {
      case "rock":
         if (computerChoice === "scissors")
            return "You win! Rock beats Scissors.";
         else if (computerChoice === "paper") {
            return "You lose Paper beats Rock!";
         } else {
            return " It is a tie!"
         }

      case "paper":
         if (computerChoice === "rock")
            return "You win! Paper beats Rock.";
         else if (computerChoice === "scissors") {
            return "You lose Scissors beats Paper!";
         } else {
            return " It is a tie!"
         }
      case "scissors":
         if (computerChoice === "paper")
            return "You win! Rock beats Scissors.";
         else if (computerChoice === "rock") {
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
    
humanScore = 0
computerScore = 0

playRound(humanSelection,computerSelection);{
   if (humanSelection > computerSelection){
       humanScore +1;
   }
  if (computerSelection > humanSelection){
       computerScore +1;
   } console.log(playRound(humanSelection,computerSelection));
   
  }
console.log(humanScore)
console.log(computerScore)

