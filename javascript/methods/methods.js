//A METHOD IS NONLESS THAN A FUNCTION ASSOCIATED WITH AN OBJECT

//constructor function:
function Assistant (name, age, role, experienced) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.experienced = experienced
}

var assistant1 = new Assistant("Bruno", 25, "Aux. contabil", true)
var assistant2 = new Assistant("Fernando", 22, "auxiliar de depilação", true)

