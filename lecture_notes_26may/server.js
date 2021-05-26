// var m1 = require("./m1");
// m1.writeMsg();
// m1.writeMsg2("Daniel");
// console.log(m1.msg);

// console.log("Hello");
// console.log(__dirname);
// console.log(__filename);

var exp = require("express");
var app = exp();

app.get("/", function(req, res) {
    res.send("Hello");
});

var port = process.env.PORT || 8080;

app.listen(port);