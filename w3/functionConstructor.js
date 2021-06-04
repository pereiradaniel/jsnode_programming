// Declare a function to initialize our "new" object with
// properties (ie: "objectProperty")
function myObjectInitializer(initialVal){
    this.objectProperty = initialVal;
}
// add methods (ie: "objectMethod") to the myObjectInitializer function prototype
myObjectInitializer.prototype.objectMethod = function(){ return this.objectProperty };

// create a new object and initialize the objectProperty with the value "Hello"
var myObject = new myObjectInitializer("Hello");
// execute the "objectMethod" on the new object
console.log(myObject.objectMethod()); // "Hello"
