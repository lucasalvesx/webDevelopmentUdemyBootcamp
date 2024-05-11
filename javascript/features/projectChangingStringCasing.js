// This project creates a prompt requesting the user to input their name, 
// and automatically capitalize the first letter;
// Using slice and toUpperCase features all by myself.

// 1 Create a var to store users name via prompt
var name = prompt("Insert your name here: ");

// 2 isolate the first character of the name from the NAME var by slicing it
var firstChar = name.slice(0,1);

// 3 after isolating, turn it into upper case by calling a native JS method (attention on syntaxis)
var upperCaseChar = firstChar.toUpperCase();

// 4 isolate the rest of name which won't be capitalizes
var restOfName = name.slice(1, name.length);

// Print the result via alert, concatenating the variables
alert("Hello, " + upperCaseChar + restOfName + "! " );
