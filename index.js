var readlineSync = require("readline-sync");

score = 0;

const chalk = require('chalk');


var q1={
  question:"Do you know ysh?\n 1.yes  2.no\n",
  answer:"1"
  }
var q2={
  question:"What is ysh's favorite color?\n 1.blue 2.orange 3.red\n",
  answer:"2"
}
var q4={
  question:"What is ysh's favorite sitcom?\n 1.F.R.I.E.N.D.S 2.The Office 3.Brooklyn 99\n ",
  answer:"3"
}
var q3={
  question:"What is ysh's favorite fastfood joint? 1.McDonald's 2.Burger king 3.Pizza Hut\n" ,
  answer:"2"
}
var q5={
  question:"Who is ysh's favorite marvel superhero? 1.Spiderman 2.Doctor Strange 3.Captain America\n",
  answer:"2"
}


var questions=[q2,q3,q4,q5];
function quiz(){
  for(var i=0;i<questions.length;i++)
  {
    var userAnswer=readlineSync.question(chalk.blackBright.bold(questions[i].question));
    if(userAnswer == questions[i].answer){
      console.log(chalk.cyan("right answer!"));
      score++;
    }
    else{
      console.log(chalk.red("wrong answer!"));
      console.log(chalk.red("The right answer is " + questions[i].answer));
    }
  }
  console.log(chalk.cyanBright("Congratulations! Your score is "+ score));

}
var user=readlineSync.question(chalk.blackBright.bold("What's your name?\n"));
console.log(chalk.cyan("Hi "+ chalk.italic(user) + "!\n"));
var que=readlineSync.question(chalk.blackBright.bold("Would you like to play a quiz?\n"));
if(que=="yes"|| que=="y")
{
  console.log(chalk.blackBright("Please enter options"));
  var ask=readlineSync.question(chalk.blackBright.bold("Do you know ysh?\n 1.yes 2.no \n"));
  if(ask=="1")
  {
    quiz();
  }
  else
  {
    console.log(chalk.yellow.bold("Bummer! You can't continue\n"));
  }
  
}
