//inputs two names of people(strings), then calculate a random number, then give back a percentage 1-100
//side note: deserves a separated repo with html, css and js

var n1 = prompt("Insert your name: ");
var n2 = prompt("Insert your sweetheart's name: ");
var loveScore = Math.random() * 100;//generating random value between 1-100
loveScore = Math.floor(loveScore) + 1;//rounding the random number down
console.log("The pecentage of love happening between " + n1 + " and " + n2 + " is " + loveScore + "%");

//now for the next section, we'll add a customized message based off the generated loveScore with if-else
