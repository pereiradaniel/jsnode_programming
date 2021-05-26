console.log("hello world");
console.log("__dirname = " + __dirname);
console.log("__filename = " + __filename);

setTimeout(function() {
    console.log("1 second timeout finished.");
}, 1000);

var count = 1;    // global counter
var maxCount = 5; // global maximum

var myCountInterval = setInterval(function () {
    console.log("Hello after " + (count++) + " second(s)");
    checkMaximum();
}, 1000);

var checkMaximum = function () {
    if (count > maxCount) {
        clearInterval(myCountInterval);
    }
};