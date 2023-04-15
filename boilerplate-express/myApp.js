let express = require('express');
let app = express();

console.log("Hello world");

app.GET("/", function(req,res) {
    res.send("Hello express")
});
































 module.exports = app;
