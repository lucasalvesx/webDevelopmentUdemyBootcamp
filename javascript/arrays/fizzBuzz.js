// fizzbuzz is a british kids game to teach division, which rules include:
// Players take turns to count incrementally, replacing any number divisible by 3 
//with the word "fizz", and any number divisible by 5 with the word "buzz",
//and any number divisible by both 3 and 5 with the word "fizzbuzz"
// so... 1, 2, fizz, 4, buzz...

// i recommend myself to apply flowcharts and basic programming logics into this code

var output = [];//array to be included the incremented number when function is called
var count = 1; //start counting from 1

//function to be called on console
function FizzBuzz() {

    //if count number when divided by 3 is left with 0:
    if (count % 3 === 0) {
        //...into the array, push the word "fizz"
        output.push("Fizz") //because it's divisible by 3
    } else {
        //otherwise, if not divisible, keep on counting +1 
        output.push(count);//push into the array, the incremented counting 
    }

    //if the count number is divisible by 5:
    if (count % 5 === 0) {
        output.push("Buzz")//...push the word "buzz" into the array
    } else {
        output.push(count)// if not, keep on counting
    }

    // if the count number is divisible by both 3 and 5:
    if (count % 3 === 0 && count % 3 === 0){
        output.push("FizzBuzz")//then replace the count number with the word "FizzBuzz"
    } else {
        output.push(count)//otherwise keep on counting
    }

    count++;//always incrementing +1   
    console.log(output);//show array on console 
}
