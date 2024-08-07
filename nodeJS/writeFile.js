//code below works creating a file in the local directory using node.js,
//follows the structure given on node.js docs

// Import the built-in 'fs' (file system) module
const fs = require("fs");

// Use the 'writeFile' method of the 'fs' module to create a file.
// Parameters:
// - "message.txt": file name to create 
// - "Hello there!": The content to write into the file
// - (err) => { ... }: A callback function that handles errors or success.
fs.writeFile("message.txt", "Hello there!", (err) => {
    // If there is an error,
    // throw the error to stop execution and display the error message.
    if (err) throw err;
    
    // If no errors occurred, log a success message to the console.
    console.log("File saved successfully!");
});

