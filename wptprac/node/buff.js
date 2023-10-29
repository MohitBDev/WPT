var buf1=Buffer.alloc(500)
var buff2=Buffer.alloc(500)
buf1.write("Hello World")
console.log(buf1.toString())
target=Buffer.alloc(buff2.length)
console.log(buf1.toString())
buf1.copy(target);
console.log(target.toString())
