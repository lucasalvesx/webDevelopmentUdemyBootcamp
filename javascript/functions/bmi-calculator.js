function bmiCalculator(weight, height){
    var bmi = (weight / (height**2));
    return Math.round(bmi);//outputs the rounded version of the bmi var value
}

var bmi = bmiCalculator(55, 1.78);
console.log("You BMI is " + bmi);
