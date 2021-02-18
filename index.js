function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")

  } else {
    rollTheDice()
  }

}

function rollTheDice() {


var randomNumber1 = Math.floor(Math.random()*6)+1;

// var diceePics = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
// var randomPicNumber1 = Math.floor(Math.random()*diceePics.length);
// document.querySelector(".img1").setAttribute("src",diceePics[randomPicNumber1]);


var randomNumber2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
}
else if (randomNumber2>randomNumber1) {document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
}
else {document.querySelector("h1").innerHTML = "🚩Draw!🚩"}

}

document.querySelector("body").onload = checkRefresh();
