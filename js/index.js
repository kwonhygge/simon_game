var numOfButtons=document.querySelectorAll(".btn").length;
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];

for (var i=0;i<numOfButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var userChosenColour=this.getAttribute("id");
    userClickedPattern.push(userChosenColour);

    animationPress(userChosenColour);
    playSound(userChosenColour);

  });
}

function nextSequence(){
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];

  gamePattern.push(randomChosenColor);

  var pressedButton = document.querySelector("#"+randomChosenColor);

  animationPress(randomChosenColor);
  playSound(randomChosenColor);

}

function animationPress(currentColor){
  currentColor.classList.add("pressed");

  setTimeout(function(){
      currentColor.classList.remove("pressed");
    },100);
}

function playSound(name){
  var audio = new Audio("sounds/"+name+".mp3");
  audio.play();
}
