var numOfButtons=document.querySelectorAll(".btn").length;
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

var started=false;
var level = 0;

document.addEventListener("keydown",function(){
  if (!started) {
    document.querySelector("#level-title").innerHTML="Level " + level;
    nextSequence();
    started = true;
  }
});

for (var i=0;i<numOfButtons;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    var userChosenColour=this.getAttribute("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animationPress(userChosenColour);
    console.log(userChosenColour);
    console.log(userClickedPattern);
    console.log(gamePattern);

    checkAnswer(userClickedPattern.length-1);

  });
}

function nextSequence(){
  userClickedPattern=[];
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];
  level++;
  document.querySelector("#level-title").innerHTML="level "+level;

  gamePattern.push(randomChosenColor);

  var pressedButton = document.querySelector("#"+randomChosenColor);

  animationPress(randomChosenColor);
  playSound(randomChosenColor);

}

function animationPress(currentColor){
  document.querySelector("#"+currentColor).classList.add("pressed");

  setTimeout(function(){
      document.querySelector("#"+currentColor).classList.remove("pressed");
    },100);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    }
  else{
    playSound("wrong");
    document.querySelector("body").classList.add("game-over");
    document.querySelector("#level-title").innerHTML="Game Over, Press Any Key to Restart";

    setTimeout(function () {
        document.querySelector("body").classList.remove("game-over");
      }, 200);

    startOver();
  }
}

function startOver(){
  level=0;
  gamePattern=[];
  started=false;
}
