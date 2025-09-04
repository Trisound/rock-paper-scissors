
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

      alert(result(choice, getComputerChoice()));
      
   })

}
console.log(getHumanChoice());



function result(getHumanChoice, getComputerChoice) {

   console.log((getHumanChoice + getComputerChoice))

   switch (getHumanChoice) {
      case "Rock":
         if (getComputerChoice === "Scissors")
            return "You win! Rock beats Scissors.";
         else if (getComputerChoice === "Paper") {
            return "You lose Paper beats Rock!";
         } else {
            return " It is a tie!"
         }

      case "Paper":
         if (getComputerChoice === "Rock")
            return "You win! Paper beats Rock.";
         else if (getComputerChoice === "Scissors") {
            return "You lose Scissors beats Paper!";
         } else {
            return " It is a tie!"
         }
      case "Scissors":
         if (getComputerChoice === "Paper")
            return "You win! Rock beats Scissors.";
         else if (getComputerChoice === "Rock") {
            return "You lose Rock beats Scissors!";
         } else {
            return " It is a tie!"
         }
      default:
         return "Invalid input. Please use 'Rock', 'Paper', 'Scissors'."
   }

}