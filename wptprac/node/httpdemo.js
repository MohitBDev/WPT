const http=require("http");
var server =http.createServer(function(req,resp){
    console.log("Requested method"+req.method+"requested url" +req.url);
    resp.writeHeader(200,{"content-type":"text/html"})
    resp.write("<h1>Hello World !</h1>");
    resp.end("<h3> World</h3>");

})
server.listen(3001,console.log("server Started"))