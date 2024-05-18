var randomNumber1 = Math.random()*6 + 1;
randomNumber1 = Math.floor(randomNumber1);
var randomImage = "dice" + randomNumber1 + ".png"
var randomSource1 = "./images/" + randomImage;
document.querySelectorAll("img")[0].setAttribute("src",randomSource1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomSource2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}


