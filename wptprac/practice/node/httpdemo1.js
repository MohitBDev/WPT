const http=require('http')
var url =require('url')
var server=http.createServer((req,resp)=>{
    var q=url.parse(req.url,true)
    console.log(q)
    resp.writeHeader(200,{"content-type":"text/html"})
    switch(q.pathname){
        case "/home":
            resp.write("<h4> Home</h4>")
            resp.end()
            break;
            case "/aboutus":
                resp.write("<h4> aboutus</h4>")
                resp.end()
                break;
    }
})
server.listen(3001,()=>{console.log("server Started at 3001")})