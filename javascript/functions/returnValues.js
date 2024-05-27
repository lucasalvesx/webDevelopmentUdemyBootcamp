// all inside the () are called parameters

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
    alert ("buy" + bottles + "bottles of Milk")
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

function calcBottles(startingMoney, costPerBottle) {
    numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hey there sir, here's your $ " + getMilk(10, 3) + " change! :)");
