
var dice1=(Math.floor(Math.random()*6))+1;
var dice2=(Math.floor(Math.random()*6))+1;

var srcpath1="images/dice"+dice1+".png";
document.getElementsByTagName("img")[0].setAttribute("src",srcpath1);

var srcpath2="images/dice"+dice2+".png";
document.getElementsByTagName("img")[1].setAttribute("src",srcpath2);


if(dice1>dice2)
{
  document.querySelector("h1").innerHTML="🚩 player 1 wins";
}
else if(dice1<dice2){
  document.querySelector("h1").innerHTML="player 2 wins 🚩";

}
else{
  document.querySelector("h1").innerHTML="draw!!";

}
