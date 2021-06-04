const PI = 3.14159;
console.log("trying to change PI");

try {
    PI = 99
}
catch(ex) {
    console.log("error: " + ex.message);
}
finally {
    console.log("Finished try.")
}

console.log("PI = " + PI);