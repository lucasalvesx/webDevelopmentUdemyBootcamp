// tasks:
// 1. use the inquirier npm package to get user insput
// 2. use the qr-generator package to turn the entered URLin an qr code Image
// 3. create a new txt file to save the useres input (w native nodejs module)

//importing modules on the module version way
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
    .prompt([
        //requires an object and uses a property called name and message (from the package)
        {
            message: "Insert your link: ",
            name: "URL", //to store the answer 
        }
    ])
    .then((answers) => {
        const url = answers.URL
        //now including objects from the qr-image module
        // aka turning url into qrcode
        var qr_svg = qr.image('This is my message');
        qr_svg.pipe(fs.createWriteStream('generate.png'));

        // now registering users input into a .txt file w/ native module
        //parameters: file name,  content, callback to handle errors or success
        fs.writeFile("userInput.txt", message,
            (err) => {
                if (err) throw err; //error handling
                console.log("Success")
            }); //if no error, then success
    })
    .catch((error) => {
        if (error.isTtyError) {

        }
        else {

        }
    });



