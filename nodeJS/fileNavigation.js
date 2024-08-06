//code below works creating a file in the local directory using node.js,
//follows the structure given ion node.js docs

// Import the built-in 'fs' (file system) module to work with the file system.
const fs = require("fs");

// Use the 'writeFile' method of the 'fs' module to create or overwrite a file.
// Parameters:
// - "message.txt": The name of the file to create or overwrite.
// - "Hello there!": The content to write into the file.
// - (err) => { ... }: A callback function that handles errors or success.
fs.writeFile("message.txt", "Hello there!", (err) => {
    // If there is an error (e.g., permission issues or invalid file path),
    // throw the error to stop execution and display the error message.
    if (err) throw err;
    
    // If no errors occurred, log a success message to the console.
    console.log("File saved successfully!");
});
