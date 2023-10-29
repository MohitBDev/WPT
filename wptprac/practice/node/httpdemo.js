const http=require('http')

var server =http.createServer((req,resp)=>{
    resp.writeHeader(200,{"content-type":"text/html"})
    resp.write("<h2>Hello World </h2>")
    resp.end("<h2>bye</h2>")

})
server.listen(3001,console.log("server Started"))