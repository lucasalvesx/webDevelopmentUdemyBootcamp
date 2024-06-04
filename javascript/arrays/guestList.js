// arrays are a way to store multiple data inside one single variable.
// all data inside must be of the same type

// this project is a guest list - all names of invited guests are stored in an array
// so we must search inside it, to check if the person name matches and if they were invited

// guest list stored in a single variable
var guestList = ["Lucas", "Carlos", "Sushi", "Luna", "Deise"];

//asking the person to input their name so it gets checked
var guestName = prompt("Whats your name baby?")

// now to search inside the array list, we apply the "includes" feature, that will return a boolean on console
if (guestList.includes(guestName)){
    alert ("Enjoy the party hell yes mate");
} else {
    alert ("Sorry, we couldn't find your name on the list.");
}
