//Must select a random name from a list and return telling they will pay for lunch

// Array of names
var names = ["Lucas", "Sushi", "Luna", "Davi", "Deise", "Felipe"];

// Define a function which takes the array of names as input
function whosPaying(names) {
    
    // Generate a random number between 0 and the length of the names array
    var random = Math.floor(Math.random() * names.length);
    
    // Uses the generated number as an index to select a name from the names array
    var selected = names[random];
    
    // Returns result
    return selected + " is going to buy lunch today!";
    
    }
    
    
    // Call function
    whosPaying(names);