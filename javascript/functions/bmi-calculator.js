function bmiCalculator(weight, height){
    bmi = Math.floor(weight / (height**2));
    return bmi;
}

var bmi = bmiCalculator(55, 1.78);
console.log("You BMI is " + bmi);
