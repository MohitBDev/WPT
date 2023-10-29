const http=require("http");

var process=(req,resp)=>{
    resp.writeHeader(200,{"content-type":"text/html"})
    resp.write("<h1>Hello World</h1>");
    resp.end("<h2>Bye world</h2>");

}
var server=http.createServer(process)
server.listen(3002,console.log("server Started"))