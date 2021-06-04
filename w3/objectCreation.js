function architect(inName, inAge) {
    this.name = inName,
    this.age = inAge,
    this.occupation = "architect";
}

architect.prototype.setName = function(newName) {this.name = newName};
architect.prototype.setAge = function(newAge) {this.name = newAge};
architect.prototype.getName = function() {return this.name};
architect.prototype.getAge = function() {return this.age};

var architect1 = new architect("Joe", 34);
var architect2 = new architect("Mary", 49);

console.log(architect1.name);
console.log(architect2.name);