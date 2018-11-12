var http = require('http'),
    fs = require('fs');


fs.readFile('./index.html', function (error, html) {
    if (error) {
        throw error; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8080);
});
