function computerpick(){
  let random=(Math.floor(Math.random()*3));
if( random===0)
{return ("rock")}
else if( random===1)
{return ("paper")}
else { return ("scissor")};}

function humanpick()
{ let humanchoice=(prompt("pick one: Rock, paper or scissor")).toLowerCase()
  
  if (humanchoice==="rock")
 { return "rock"}
 else if (humanchoice==="paper")
 {return("paper")}
 else {return "scissor"}
}
let humanscore=0;
let computerscore=0;

function winner( human,computer)
{ if( computer===human)
  {return(("no winner"))}
  else if ( human ==="rock" && computer==="scissor"|| human==="paper"&& computer==="rock")
    {humanscore++; return( "human won" )}
  else if( ( computer ==="rock" && human==="scissor"|| computer==="paper"&& human==="rock"))
  {computerscore++;return "computer won" }
  
  
   
  }
 
 
 



function gamewinner(){

 
 


  for (let i =0; i<5; i++)
  
  { let humanselection=humanpick();
    let computerselection=computerpick();
    let result= winner(humanselection,computerselection)
    
  console.log(`you chose ${humanselection}, computer chose ${computerselection}`)
  console.log(result) 
 }
console.log(`final score: You : ${humanscore}- Computer: ${computerscore}`)}

gamewinner()
  



