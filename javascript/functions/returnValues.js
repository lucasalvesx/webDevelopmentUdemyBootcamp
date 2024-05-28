// all inside the () are called parameters
// math.floor rounds down a broken number

// code is a problem to be solved: we need to program a bot that will buy us milk
// we give it some amount of money, and based off how much it costs, it will bring us the affordable amount of milk
// it should also calculate the change to be received, and bring it back to us.

function getMilk(money, costPerBottle) {
    console.log ("leaveHouse")
    console.log ("moveRight")
    console.log ("moveRight")
    console.log ("moveUp")
    console.log ("moveUp")
    console.log ("moveUp")
    console.log ("moveUp")
    console.log ("moveRight")
    console.log ("moveRight")

    console.log( "buy " + calcBottles(money, costPerBottle) + " bottles of milk" );
    // calcBottles function is defined below, 1.5 is how much it costs

    console.log ("moveLeft")
    console.log ("moveLeft")
    console.log ("moveDown")
    console.log ("moveDown")
    console.log ("moveDown")
    console.log ("moveDown")
    console.log ("moveLeft")
    console.log ("moveLeft")
    console.log ("enterHouse")

//now we specify what we want as an output of this function

    return money % 1.5; //will give us the remainder of division
}

// we can store the output of the function above inside a variable, here called change:
var change = getMilk(); //inside the (parameters) we specify how many bottles we'd wish
console.log(change); // outputs the result

function calcBottles(startingMoney, costPerBottle) {
    numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

// now we'll calculate the change:
function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

// so we call the function, saying $5 is the parameter - as we declared - for how much money we got
// and also output the costPerBottle 
console.log("Hey there sir, here's your $ " + getMilk(5, 1.5) + " change! :)");





