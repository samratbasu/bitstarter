var express = require('express');
var fs = require('fs');
var readBuff = fs.readFileSync('index.html');
var writeTxt = readBuff.toString();
//console.log(writeTxt);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(writeTxt);
});

var port = process.env.PORT || 8888;
app.listen(port, function() {
  console.log("Listening on " + port);
});
