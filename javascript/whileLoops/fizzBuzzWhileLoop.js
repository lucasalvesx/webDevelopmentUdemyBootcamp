// same code as in fizzbuzz challenge, but added an while loop

var output = [];
var count = 1;

function FizzBuzz() {
while (count <= 100 ){//Runs in loop while condition is true, then stops when false

    if (count % 3 === 0 && count % 5 === 0){
        output.push("Fizzbuzz")
    }
    
    if (count % 3 === 0) {
        output.push("Fizz")
    }

    else if (count % 5 === 0) {
        output.push("Buzz")
    }

    else {
        output.push(count)
    }  

    count++;
}
    console.log(output);
}
