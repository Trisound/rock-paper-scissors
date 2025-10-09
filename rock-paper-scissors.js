



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
      const computerChoice = getComputerChoice()

      alert(playRound(choice,computerChoice, function(){console.log({"humanScore":humanScore,"Comp":computerScore,"MyHand":choice,"TheirHand":computerChoice});}));


      
   })
   
}
console.log(getHumanChoice());

 let humanScore = 0
 let computerScore = 0


function playRound(humanChoice, computerChoice, callback) {
   const normalizedhumanChoice = String(humanChoice).toLowerCase();

   if (["rock","r"].includes(humanChoice)) return "rock";
   if (["paper","p"].includes(humanChoice)) return "paper";
   if (["scissors","s"].includes(humanChoice)) return "scissors";

   switch (normalizedhumanChoice) {
      case "rock":
         if (computerChoice === "scissors") {
            humanScore++
            callback();
            return "You win! Rock beats Scissors.";
         } else if (computerChoice === "paper") {
            computerScore++
            callback();
            return "You lose Paper beats Rock!";
         } else {
            callback();
            return " It is a tie!"
         }

      case "paper":
         if (computerChoice === "rock"){
             humanScore++
             callback();
            return "You win! Paper beats Rock.";
         } else if (computerChoice === "scissors") {
             computerScore++
             callback();
            return "You lose Scissors beats Paper!";
         } else {
            callback();
            return " It is a tie!"
         }
      case "scissors":
         if (computerChoice === "paper"){
             humanScore++
             callback();
            return "You win! Rock beats Scissors.";
         } else if (computerChoice === "rock") {
             computerScore++
             callback();
            return "You lose Rock beats Scissors!";
         } else {
            callback();
            return " It is a tie!"
         }
      default:
         callback();
         return "Invalid input. Please use 'Rock', 'Paper', 'Scissors'."
   }
  
} 


    

