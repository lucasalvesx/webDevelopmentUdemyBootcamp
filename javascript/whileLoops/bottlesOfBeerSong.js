// automating the lyrics to a popular song which counts in decrement from 99 to 0
// using functions and while loops

var i = 99;//accounting variable - since we're decrementing, it starts in the highest number

function song() {//declarating function
    
    while (i >= 0) {//more o equal to 0, meaning it stops counting on 0
        
        //print this on console
        console.log(i + " bottles of beer on the wall, " + i + " bottles of beer..." +
            " Take one down and pass it around, " + i + " bottles of beer on the wall."
        );

        //then decrements from variable (still inside the loop)
        i--

    }

}

//calls function
song()

