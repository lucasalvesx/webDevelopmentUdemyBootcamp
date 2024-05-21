// goal is to display text saying how many days, weeks and years of life we have left to live,
// assuming we'll live until 90yrs old
// 1 year = 12 months, 52 weeks and 365 days
// take as input: currentAge

// display in console.log in the format:
// "you've got x days, y weeks and z months left to live."
// being x, y and z replaced with calculated numbers.

function lifeInWeeks(age) {

    // age is a var with input value
    // var age=prompt("how old are you?");

    var yearsLeft = 90 - age;
    var days = yearsLeft * 365;
    var weeks = yearsLeft * 52;
    var months = yearsLeft * 12;

    console.log("You still got " + days + " days, " + weeks + " weeks and " + months + " months left to live.")

}

lifeInWeeks(19)