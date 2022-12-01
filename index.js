var readlineSync=require('readline-sync');
var userName = readlineSync.question('can i know your name');
console.log("welcome " + userName +" do u know subhash chandra bose" );
var score=0;
function fandomquiz(question,answer){
var takingQuestion=readlineSync.question(question);
  if(takingQuestion==answer){
    console.log("you are right");
    score=score+1;
    console.log(score);
  }
  else{
    console.log("you are wrong");
  }
}

var questions=[{
  question:"when was subhash chandra bose born?",
  answer:"23 jan",
},
 {
  question:"where was subhash chandra bose born?",
   answer:"orissa",
 },
{ question:"who formed Azad Hind Fauz?",
 answer:"subhash chandra bose",
},
               
{ question:"Jai Hind slogan given by?",
  answer :"subhash chandra bose",
},
{ question:"who did subhash chandra bose met in germany?",
 answer:"hitler",
  
}];

for(var i=0;i<questions.length;i++){
   takingElements=questions[i];
  fandomquiz(takingElements.question,takingElements.answer)
}
console.log(score);