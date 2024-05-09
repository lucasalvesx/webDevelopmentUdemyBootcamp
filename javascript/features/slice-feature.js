//The .slice feature takes a selected piece out of a value

//Variables section
var tweet = prompt("Compose your tweet: ");
var tweetUnder140 = tweet.slice(0,140);

alert(tweetUnder140);

//The output is going to cut off in the 140th character

