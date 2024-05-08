// Using the .length feature in this project 
// Based on Twitter counter of how many characters youve still got left since there is a limit of 140

//Variables area
var tweet = prompt("Compose your tweet: ");
var count = tweet.length;

alert("You have written " + count + " characters, you have got " + (140 - count) + (" characters left."));