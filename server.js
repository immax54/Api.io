"use strict";
var http = require("http");
http.createServer(function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
    res.setHeader('Access-Control-Max-Age', 86400000000); // 30 days
    var json = { "id": 1, "name": "Bob" };
    var outjson = JSON.stringify(json);
    var url = req.url;
    if (url === '/json') {
        res.write((outjson)); //write a response
        res.end(); //end the response
    }
    else if (url === '/name') {
        res.write((json.name)); //write a response
        res.end(); //end the response
    }
    else if (url === '/id') {
        res.write("".concat(json.id.toString()));
        res.end();
    }
    else {
        res.write("ERROR! No API here!");
        res.end();
    }
}).listen(3000, function () {
    console.log("Server started at 3000 port");
});
