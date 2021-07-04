class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
background("yellow")
    //write code to show a heading for showing the result of Quiz
text("ResultofTheQuiz",350,50)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()

    //write condition to check if contestantInfor is not undefined
    if(allcontestants !== undefined){
      var display_position = 200;
    //write code to add a note here
text("Contestants who answered correct are highlighted in Green colour, 130, 230")
    //write code to highlight contest who answered correctly
    for(var plr in allcontestants){
      var correctAns = "2";
      if(correctAns === allcontestants[plr].answer)
      fill("Green")
      else
      fill("red");
       display_position += 30;
       textSize(15);
       text(allcontestants[plr].name + ": " + allcontestants[plr].answer, 250,display_position)
   }
  }
  }
}
