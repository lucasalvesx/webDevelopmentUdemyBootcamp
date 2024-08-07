// we must first import the file system module. which is given in node.js docs;
// then we'll create a file in our file system;
// the file will contain a chosen message;
// after that, we'll make node read the file we just created

//STEP 1: WRITE FILE

// import the built-in 'fs' module
const fs = require("fs")

// [module] . [method from fs module to create a file]
// parameters - in ( ): [file name to create], [content to be put in file], [callback*]
fs.writeFile("message.txt", "Hello Node.JS", 

//*callback function for handling errors if necessary
 (err) => {
 if (err) throw err;
 //if not error, display:
 console.log("Okay")//success message
});

// ps: to run this we go on the CLI, "cd 'this directory'", "node 'thisFile'"

//STEP 2: READ FILE

//parameters: [error message if any], [file content], callback
fs.readFile("message.txt", 'utf-8', (err, data) => {
if (err) throw err;//if error, output the error message declared up above
console.log(data)//will output the message in the message.txt file
 });
 

