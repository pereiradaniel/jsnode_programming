var localFunction = function() {
}

var msg2 = "Daniel";

module.exports.msg = "msg";

module.exports.writeMsg = function() {
    console.log("Hello " + msg2);
}

module.exports.writeMsg2 = function(name) {
    console.log("Hello " + name);
}