var express = require("express");
var app = express();

app.set("view engine", "jade")

app.get("/", function(req, res){
    res.render("index");
});
var ip = process.env.IP;
var port = process.env.PORT;

if(ip === undefined){
    ip = "::";
}
if(port === undefined){
    port = 3000;
}
var server = app.listen(port, function () {
    var host = ip;
    var portName = port;

    console.log('Example app listening at http://%s:%s', host, portName);
});

