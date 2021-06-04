// The most simple and straight-forward way to create an object in JavaScript
// is to use “Object Literal Notation” (sometimes referred to as
// “object initializer” notation). The syntax for creating an object using
// this notation is as follows:

var obj = {
    property_1: "value_1",
    property_2: "value_2"
};

console.log(obj);

var architect = {
    name: "Joe",
    age: 34,
    occupation: "Architect",
    setAge: function(newAge) {this.age = newAge},
    setName: function(newName) {this.name = newName}
};

// Now, if we want to create more objects with these same properties & methods,
// we can leverage JavaScripts native Object.create() method:

// if we wish to create two new architect objects, we can simply call Object.create()
// with our previous architect object as the first parameter:

var architect1 = Object.create(architect);
var architect2 = Object.create(architect);

architect2.setName("Mary");
console.log(architect1.name);
console.log(architect2.name);