// tasks:
// 1. use the inquirier npm package to get user insput
// 2. use the qr-generator package to turn the entered URLin an qr code Image
// 3. create a new txt file to save the useres input (w native nodejs module)

//gettin the user input
import inquirier from 'inquirier';

inquirier
    .prompt([
        "What's your link to turn into a QR code?"
    ])
    .then((text) => {

    })
    .catch((error) => {
        if (error.isTtyError) {
            console.error("Cannot be displayed")
        }
        else {
            console.log("Success!")
        }
    });

//turning data into a QR
var qr = require('qr-image');

// var qr_svg = qr.image('I love QR!', { type: 'svg' });
// qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));

// var svg_string = qr.imageSync('I love QR!', { type: 'svg' });

// qr.image(text, [ec_level | options]);

//creating new txt file with native node module

const fs = require('fs');//importing module

//parameters: file name,  content, callback to handle errors or success
fs.writeFile("qrCode.txt", "content here!", 
    (err) => { if (err) throw err; //error handling
        console.log("Success") }); //if no error, then success
