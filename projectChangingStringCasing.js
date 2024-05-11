// This project creates a prompt requesting the user to input their name, 
// and automatically capitalize the first letter;
// Uses the slice and toUpperCase features all by myself.

// 1 Create a var to store users name via prompt
var name = prompt("Insert your name here: ");

// 2 capitalize the first letter
var firstLetter = name.slice(0,1);

// Print the result via alert
alert("Hello, " + firstLetter + name + "! ");