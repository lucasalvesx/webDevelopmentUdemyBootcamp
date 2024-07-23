//a constructor function works like a factory of objects
//sytanx: function name starts in Capital, so we can tell its a constructor function
//in the ( ) it takes the inputs

function HouseKeeper(name, age, experienced, willingTo){
    //matching inputs with property names
    //this.property = input 
    this.name = name;
    this.age = age;
    this.experienced = experienced;
    this.willingTo = willingTo;
}

//creating an object with constructor function
//syntax: new object = Function(values for the required inputs)
var houseKeeper1 = new HouseKeeper("Rosy", 26, true, ["clean", "wash"])