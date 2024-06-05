// Fizzbuzz is a british kids game to teach division, which rules include:
// Players take turns to count incrementally, replacing any number divisible by 3 
// with the word "fizz", and any number divisible by 5 with the word "buzz",
// and any number divisible by both 3 and 5 with the word "fizzbuzz"
// so for example: 1, 2, fizz, 4, buzz...

// it's recommended to apply flowcharts and basic programming logics into this problem;
// important to remember that conditionals are interpreted in a flow...
// where all conditions are interpreted to be true or false, and if false, gets the next one to be tested and so on

var output = [];//array to be included the incremented number when function is called
var count = 1; //starts counting from 1

//function to be called on console
function FizzBuzz() {

    // first check if count is divisible by both 3 and 5
    if (count % 3 === 0 && count % 5 === 0){
        output.push("Fizzbuzz")
    }
    
    //if not by both, check if count number is divisible by 3:
    if (count % 3 === 0) {
        output.push("Fizz") //if so, push the word "fizz" into the array
    }

    //if not by both or by 3, check if count number is divisible by 5:
    else if (count % 5 === 0) {
        output.push("Buzz")//if so, push the word "buzz" into the array
    }

    //otherwise, if not divisible by any condition, keep on counting +1 
    else {
        output.push(count)
    }  

    count++;//always incrementing +1   
    console.log(output);//show array on console
}

FizzBuzz();


