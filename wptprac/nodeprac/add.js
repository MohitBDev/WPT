const m1 = require("./funcn")
const http = require("http")
const url = require("url")
const fs = require("fs")

var proces = (req, resp) => {
    var q = url.parse(req.url, true)
    resp.writeHeader(200,{"content-type":"text/html"})
    console.log(q.pathname)
    switch (q.pathname) {

        case "/form":
            var rs = fs.createReadStream("./add.html");
            rs.pipe(resp);


            break;
        case "/submit-data":
            if(q.query.btn=="add"){
            var n1 = parseInt(q.query.num1);
            var n2 = parseInt(q.query.num2);
            var ans = m1.addition(n1,n2);
            resp.write("<h1>" + "Addidion :" + ans + "</h1>")}
            else{
                var n1 = parseInt(q.query.num1);
                var ans = m1.factorial(n1);
            resp.write("<h1>" + "Factorial :" + ans + "</h1>")
        
            }

            resp.end()
            break;
        default:
            resp.write("go to /form url")
            resp.end();
            break;




    }

}
const server = http.createServer(proces)
server.listen(3001, () => {
    console.log("Server Started at 3001")

})