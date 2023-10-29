const http = require("http")
const url = require("url")
const fs = require("fs")
const m1 = require("./authenticateuser")

const server = http.createServer(function (req, resp) {
    var q = url.parse(req.url, true)
    resp.writeHeader(200, { "content-type": "text/html" })
    console.log(q);
    switch (q.pathname) {
        case "/login":
            var rs = fs.createReadStream("./login.html")
            rs.pipe(resp)
            break;
        case "/loginuser":
            var u = q.query.uname;
            var p = q.query.pass;
            var ans = m1.validateuser(u, p);
            if (ans) {
                resp.write("<h1>SuccesFull Loged in</h1>")
                resp.end()

            } else {
                resp.write("<h1>UnSuccesFull  attepmt</h1>")
                resp.write( " <a href='/login'> Login</a> ------- <a href='/register'> register</a>");
                resp.end()
            }

            break;
        case "/register":
            var rs = fs.createReadStream("./reg.html")
            rs.pipe(resp)
            break;

        case "/registeruser":
            var u = q.query.uname;
            var p = q.query.pass;
            var ans = m1.adduser(u,p);
            if (ans) {
                resp.write("<h1>SuccesFull Registered</h1>")
                resp.write( " <a href='/login'> Login</a>");
                resp.end()
            }
            else {
                resp.write("<h1>unSuccesFull Registered</h1>")
                resp.write( " <a href='/register'> register</a>");
                resp.end()
            }
            break;

        default:
            resp.write("<h1>Login Or Register</h1>")
            resp.write( " <a href='/login'> Login</a> ------- <a href='/register'> register</a>");
            resp.end()

            break;

    }




})
server.listen(3001, () => {
    console.log("Server Started at 3001")
})

