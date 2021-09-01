
function computerPlay() {
    let chance = Math.random()*3;
    let computerChoice;
    if(chance < 1) computerChoice = "Rock";
    else if (chance > 1 && chance < 2) computerChoice = "Paper";
    else if(chance > 2 && chance < 3) computerChoice = "Scissor";
    else computerChoice = "Something went wrong";

    return computerChoice;
}


function playRound(playerSelection, computerSelection){
  
  let output;
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if(playerSelection == "rock" && computerSelection == "rock") output ="Rock ties Rock";
  else if(playerSelection == "rock" && computerSelection == "paper") output ="Rock loses to Paper";
  else if(playerSelection == "rock" && computerSelection == "scissor") output ="Rock wins over Scissor";
  
  else if(playerSelection == "paper" && computerSelection == "rock") output ="Paper wins over Rock";
  else if(playerSelection == "paper" && computerSelection == "paper") output ="Paper ties Paper";
  else if(playerSelection == "paper" && computerSelection == "scissor") output ="Paper loses to Scissor";

  else if(playerSelection == "scissor" && computerSelection == "rock") output ="Scissor loses to Rock";
  else if(playerSelection == "scissor" && computerSelection == "paper") output ="Scissor wins over Paper";
  else if(playerSelection == "scissor" && computerSelection == "scissor") output ="Scissor ties Scissor";


  return output; 
}
function game(){
    let userSel;
    let compSel;
    let erg;
    let winsOfComputer = 0;
    let winsOfPlayer = 0;
    
    
    
    for(let i = 0; i <5;i++)
    {
    userSel = window.prompt("Input Rock, Paper, Scissor", "");
    compSel = computerPlay();
    //console.log("Computer Selction:" + compSel);
    //console.log("Player Selction:" + userSel);
    erg = playRound(userSel,compSel);
    
    if (erg.includes("loses")) winsOfComputer++;
    else if(erg.includes("wins")) winsOfPlayer++;
    
    console.log(erg);
    
    }
    
    console.log("Wins of player:" + winsOfPlayer);
    console.log("Wins of computer:" + winsOfComputer);
    
    if(winsOfComputer < winsOfPlayer) console.log("Player wins");
    else if(winsOfPlayer < winsOfComputer) console.log("Computer wins");
    else console.log("Tie");
}

game();


    



