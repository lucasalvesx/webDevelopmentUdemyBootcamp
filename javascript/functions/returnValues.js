// all inside the () are called parameters

function getMilk(bottles) {
    console.log ("leaveHouse")
    console.log ("moveRight")
    console.log ("moveRight")
    console.log ("moveUp")
    console.log ("moveUp")
    console.log ("moveUp")
    console.log ("moveUp")
    console.log ("moveRight")
    console.log ("moveRight")
    console.log ("buy" + bottles + "bottles of Milk")
    console.log ("moveLeft")
    console.log ("moveLeft")
    console.log ("moveDown")
    console.log ("moveDown")
    console.log ("moveDown")
    console.log ("moveDown")
    console.log ("moveLeft")
    console.log ("moveLeft")
    console.log ("enterHouse")
}

function calcBottles(startingMoney, costPerBottle) {
    numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hey there sir, here's your $ " + getMilk(10, 3) + " change! :)");
