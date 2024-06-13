//var n = the NUMBER OF ITEMS to show up on console

function fibbonaciGenerator(n) {
    var output = [];

    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        output.push(output.lenth - 2 + output.length - 1);
        if (n === output.length) {

        }
    }


    return output;
}