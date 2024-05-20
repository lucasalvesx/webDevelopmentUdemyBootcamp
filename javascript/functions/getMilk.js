// project following the previous example of the getMilkRobot
// but now, we'll specify the amount of milk bottles we'd like the robot to go buy
// we do that by adding input values

// we add the name of the desired input, in the function declaration
// When you pass smthng as an argument in a function, it creates a var

// same function as previous example:
function getMilk(bottles) {
    alert ("leaveHouse")
    alert ("moveRight")
    alert ("moveRight")
    alert ("moveUp")
    alert ("moveUp")
    alert ("moveUp")
    alert ("moveUp")
    alert ("moveRight")
    alert ("moveRight")
    //adding var input, so when the function gets invoked, it executes with the user-selected value
    alert ("buy" + bottles + "botles of Milk")
    alert ("moveLeft")
    alert ("moveLeft")
    alert ("moveDown")
    alert ("moveDown")
    alert ("moveDown")
    alert ("moveDown")
    alert ("moveLeft")
    alert ("moveLeft")
    alert ("enterHouse")
}

// so to invoke the function, we call:
getMilk(2);

// then the variable bottles is = 2
