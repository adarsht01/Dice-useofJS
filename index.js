//document.querySelector("body").style.backgroundColor="red";
var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
var randomDice="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDice2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
