//A METHOD IS NONLESS THAN A FUNCTION ASSOCIATED WITH AN OBJECT

//constructor function:
function Assistant (name, age, role, experienced) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.experienced = experienced
    //method example:
    this.writeReport = function() {
        alert("Tell me what you need: ");
        makeReport();
        deliverForReview();
    }
    this.clean = function() {
        alert("Cleaning in progress... Hold on");
    }
}

//creating new OBJECTS
var assistant1 = new Assistant("Bruno", 25, "Aux. contabil", true)
var assistant2 = new Assistant("Fernando", 22, "auxiliar de depilação", true)

//calling a method for an object
assistant1.writeReport();