const http = require("http");
const url = require("url");
var processrequest = (req, resp) => {
    //url object
    var q = url.parse(req.url, true)
    console.log(q.pathname);
    console.log(q);
    resp.writeHeader(200, { "content-type": "text/html" })
    // resp.write();
    //resp.end();


    switch (q.pathname) {
        case "/home":
            resp.write("<h1>Hello World</h1>");
            resp.end("<h1> helo</h1>");
            break;
        case "/aboutus":
            resp.write("<h1>Heloo World</h1>");
            resp.end("<h1>Aboutus</h1>");
            break;
        default:
            resp.write("<h1>Hello</h1>");
            resp.end("<h1>Default</h1>");
            break;
    }
}
var server = http.createServer(processrequest)
server.listen(3001, () => {
    console.log("server Started");
})