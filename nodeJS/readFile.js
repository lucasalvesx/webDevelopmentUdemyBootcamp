//WRITE FILE

//[const] [variable] = [built-in node function for importing modules] ("[core module for the file system]")
const fs = require("fs")

// [method from fs modules for wrting data in a file] ("[file name for creating"], ["text to display"], [error handling])
fs.writeFile("message.txt", "Hello NodeJS", 

    //callback function for handling errors if necessary
    (err) => {
    if (err) throw err;
    console.log("Not successfully loaded.. try again.")
}
)
;

//READ FILE

fs.readFile("message.txt", (err, data) => {
if (err) throw err;//if error, output the error message declared up above
console.log(data)//will output the message in the message.txt file
 });
 

