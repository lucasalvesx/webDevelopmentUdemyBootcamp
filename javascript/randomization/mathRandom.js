//generate  random number via native function Math.random()
var n = Math.random();//ouputs 0. + 16 decimal places of random digits, never reaching 1
n * 6;
//now transform the variable n
n = Math.floor(n);//rounds down the random generated number 

console.log(n);