// var student = {
//     firstName : "",
//     lastName: "",
//     setFirstName: function(name) { this.firstName =name},
//     setLastName: function(name) {this.lastName=name},
//     showFullName: function() {console.log(this.firstName+" "+ this.lastName);}
//  }

//  console.log(student.firstName+" "+student.lastName);
//  student.setFirstName("Daniele");
//  student.setLastName("Pereira");
//  student.showFullName();

//  var std1 = Object.create(student);
//  var std2 = Object.create(student);

//  std1.firstName="fname";
//  std2.firstName="lname";

function student(fName, lName) {
    this.firstName = fName,
    this.lastName = lName
}

var std1 = new student("fname", "lname");

student.prototype.showFullName = function() {console.log(this.firstName + " " + this.lastName);};

var std2 = new student("std2fname", "std2lname");

std1.showFullName();
std2.showFullName();
