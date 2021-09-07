
function computerPlay() {
/*
This function generates a random float number between 0 and 3. 
If the generated number is below 1 the function returns Rock
If the generated number is between 1 and 2 the function returns Paper
If the generated number is over 2 the function returns Scissor
*/ 

    let chance = Math.random()*3;
    let computerChoice;
    if(chance < 1) computerChoice = "Rock";
    else if (chance > 1 && chance < 2) computerChoice = "Paper";
    else if(chance > 2 && chance < 3) computerChoice = "Scissor";
    else computerChoice = "Something went wrong";

    return computerChoice;
}


function playRound(playerSelection, computerSelection){
/*
This function plays a round of rock, paper, scissor. 
To avoid case sensitive problems everything is converted to lower Case
playSelection and computerSelection are Strings 
 */

  
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
    /*
Plays 5 games of Rock, Paper, Scissor and records the results with the
String function include    
    */ 
    
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
    

    
    console.log(erg);
    
    }
    
    console.log("Wins of player:" + winsOfPlayer);
    console.log("Wins of computer:" + winsOfComputer);
    
    if(winsOfComputer < winsOfPlayer) console.log("Player wins");
    else if(winsOfPlayer < winsOfComputer) console.log("Computer wins");
    else console.log("Tie");
}


function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('computerChoice');
  }

//game();

const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.results');
const standingsContainer =document.querySelector('.standings')

const img_rock = document.querySelector('#img_rock');
const img_paper = document.querySelector('#img_paper');
const img_scissor = document.querySelector('#img_scissor');

const resultParagraph = document.createElement('p');
const standingsParagraph = document.createElement('p');
let winsPlayer = 0, winsComputer = 0;


buttons.forEach((button)=>{
    button.addEventListener('click',()=>{ 
         let computerP = computerPlay();
         
         if (computerP == "Rock") img_rock.classList.add('computerChoice');
         else if(computerP == "Paper") img_paper.classList.add('computerChoice');
         else if(computerP == "Scissor") img_scissor.classList.add('computerChoice');
         let erg = playRound(button.id,computerP);

         if (erg.includes("loses")) winsComputer++;
         else if(erg.includes("wins")) winsPlayer++;

        
        resultParagraph.textContent = erg;
        standingsParagraph.textContent = winsPlayer + ":" +winsComputer;
        resultContainer.appendChild(resultParagraph);
        standingsContainer.appendChild(standingsParagraph);

        if(winsPlayer >= 5 || winsComputer >= 5) {alert("somebody won"); location.reload();}

        setTimeout(function(){ 
            img_rock.classList.remove('computerChoice');
            img_paper.classList.remove('computerChoice');
            img_scissor.classList.remove('computerChoice');
         }, 1000);
         //resultParagraph.classList.add('resultParagraph');
         //alert(erg);
         
    });
});




    



