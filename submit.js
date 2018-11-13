var http = require('http');
var fs = require('fs');

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
        if(request.username==="username"&&request.password==="password"){
        	console.log('user is authenticated');
        }
        else{
        	console.log('user is not authenticated');
        }
    } 
});
server.listen(8080);
console.log('Server listening on port 8080');
