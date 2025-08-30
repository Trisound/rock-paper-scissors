
function getComputerChoice(number){
         
      return Math.random(number)
        
}

console.log((getComputerChoice()));

 

function getHumanChoice(){
 const choiceButton = document.querySelector("#choiceButton");
 const log = document.querySelector("#log");

 choiceButton.addEventListener("click", () => {
   let choice = prompt("Whats your choice?");
   if ( choice === null){
    log.innerText = "I need a choice!";
   } else if (choice === "Rock") {
      log.innerText = "Rock wins!"
   } else if (choice === "Paper") {
      log.innerText = "Paper wins!"
   } else if (choice === "Scissors") {
      log.innerText = "Scissors wins!"
   } else {choice === null
      log.innerText = "No choice";
}

    return prompt("Please choose rock, paper, or scissors!")})

console.log(getHumanChoice());}