const Rock=document.getElementById("rock");
const Paper=document.getElementById("paper")
const Scissors=document.getElementById("scissors")
const Result=document.getElementById("result")
const UserChoice=document.getElementById("user-score")
const ComputerChoice=document.getElementById("computer-score")
const buttons=document.querySelectorAll("button");
let userE1=0
let computerE1=0

function computergame(){
    const choices=["Rock","Paper","Scissors"];
     return choices[Math.floor(Math.random()*choices.length)]

}
function game(userchoice){
    const option=computergame();
    if(userchoice===option){
        Result.innerHTML=`It's a tie!`

    }
    else if((userchoice==="Rock"&& option==="Scissors")||
    (userchoice==="Paper"&& option==="Rock")||
    (userchoice==="Scissors"&& option==="Paper")){
        userE1++
        UserChoice.innerHTML=`${userE1}`
        Result.innerHTML=`You win! ${userchoice} beats ${option}.`
        
    }
    else{
        computerE1++
        ComputerChoice.innerHTML=`${computerE1}`
        Result.innerHTML=`You lose! ${option} beats ${userchoice}.`

    }
}
