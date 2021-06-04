function divide (x,y) {
    if (y==0) {
        throw new Error("Division by zero!");
    }
    return x / y;
}

let a = 5, b = 0, c;

try {
    c = divide(a,b);
} catch(ex) {
    console.log("An error has occurred: " + ex.message);
    c = NaN;
}

console.log(a + "/" + b + " = " + c);