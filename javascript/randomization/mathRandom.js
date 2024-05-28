//generate  random number via native function Math.random()
var n = Math.random();//ouputs 0. + 16 decimal places of random digits, never reaching 1
n * 6;//will output between 0 - 5.9999999999999999
//now transform the variable n
n = Math.floor(n);//rounds down the random generated number - this case its: 0-5

console.log(n);