const fs=require("fs")
var r=fs.createReadStream("rushi.txt")
var w=fs.createWriteStream("test.txt")
r.pipe(w);
var p=fs.readFileSync("test.txt")
console.log(p.toString())