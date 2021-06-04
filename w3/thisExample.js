function architect(inName, inAge) {
    this.name = inName,
    this.age = inAge,
    this.occupation = "architect";
}

architect.prototype.setName = function(newName) {this.name = newName};
architect.prototype.setAge = function(newAge) {this.name = newAge};
architect.prototype.getName = function() {return this.name};
architect.prototype.getAge = function() {return this.age};

architect.prototype.outputNameDelay = function () {
    setTimeout(function() {
        console.log(this.name);
    }, 1000);
}

architect.prototype.outputNameDelay2 = function () {
    var that = this;
    setTimeout(function() {
        console.log(that.name);
    }, 1000);
}

var architect1 = new architect("Joe", 34);
var architect2 = new architect("Mary", 49);

console.log(architect1.name);
console.log(architect2.name);

// because the setTimeout function is not executed as a method of our architect
// object, we end up with “undefined” being output to the console
architect2.outputNameDelay(); // outputs undefined
architect2.outputNameDelay2(); // outputs undefined