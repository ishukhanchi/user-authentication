var http = require('http');
var hostname = '127.0.0.1';
var dt = require("./index.html") 
http.createServer(function(req, res) {
  if(req.username==="username"&&req.password==="password"){
      res.send('Info submitted successfully');//user is authorised
    }
  else{
    res.send('Recheck username and password');//user is not authorised
  }
}).listen(8080);

