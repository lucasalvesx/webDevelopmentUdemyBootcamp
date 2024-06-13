//same code as fizzbuzz but with the for loop

var output = [];


function FizzBuzz() {
    //will start being 1; will end when 100; will increment when ending
for (var count = 1;  count <= 100; count++){

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

    
}
    console.log(output);
}
