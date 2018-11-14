var http = require('http');
var fs = require('fs');
var querystring = require('querystring');

var server = http.createServer(function (request, response) {

    if (request.url="/submit") {
        fs.readFile("./index.html", function (error, pgResp) {
            if (error) {
                response.writeHead(404);
                response.write('Contents you are looking are Not Found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(pgResp);
            }
            response.end();
        });
        console.log()
       if(request.method== "POST")
        {
          var a = "";
          request.on("data", function(part)
          {
            a += part;
          });
          request.on("end", function(part)
          {
            var store = querystring.parse(a);
        
            if(store.username === "username" && store.password === "password")
            {
              console.log("User is authenticated");
           }
            else {
               console.log("User is not authenticated.");
            }
          });
        }
    }
});
server.listen(8080);
console.log('Server listening on port 8080');
