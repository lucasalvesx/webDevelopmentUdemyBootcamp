// automating the lyrics to a popular song which counts in decrement from 99 to 0
// using functions and while loops

var i = 99;
var decrement = i--;

function song() {
    while (i >= 0) {
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer" +
            "Take one down and pass it around, " + decrement + "bottles of beer on the wall."
        );
    }

    i--

}

song()

