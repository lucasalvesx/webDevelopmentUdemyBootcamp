//inputs two names of people(strings), then calculate a random number, then give back a percentage 1-100
//side note: deserves a separated repo with html, css and js

var n1 = prompt("Insert your name: ");
var n2 = prompt("Insert your sweetheart's name: ");
var loveScore = Math.random() * 100;//generating random value between 1-100
loveScore = Math.floor(loveScore) + 1;//rounding the random number down
console.log("The pecentage of love happening between " + n1 + " and " + n2 + " is " + loveScore + "%");

//now for the next section, we'll add a customized message based off the generated loveScore with if-else statements
if (loveScore > 70) {
    alert("Your love score is " + loveScore + "! You love each other a lot, eh?");
}

if (loveScore > 30 && loveScore <= 70){//more than 30 AND less or equal to 70...
    alert("Your love score is " + loveScore + "%. It's regular");//between 30 and 70
}

if (loveScore <= 30){
    alert("Your love score is " + loveScore + "%. Damn bro...");
}

