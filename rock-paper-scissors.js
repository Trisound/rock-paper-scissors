
function getComputerChoice(number){
         
      return Math.random(number)
        
}

console.log((getComputerChoice()));

 

function getHumanChoice(String){
 const choiceButton = document.querySelector("#choiceButton");
 const log = document.querySelector("#log");
   String = ""
 choiceButton.addEventListener("click", () => {
   let choice = prompt("Whats your choice?");
   if ( choice === null){
    log.innerText = "I need a choice!";
   } else if (String > 0) {
      choice = "Rock wins!";
   }
   });

    return prompt("Please choose rock, paper, or scissors!")
}
console.log(getHumanChoice(String));