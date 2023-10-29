exports.addition=function(n1,n2){
    return n1+n2;
    console.log(n1+n2)

}
exports.permutation=function(n,r){
    var p=fact(n)
    var pr=fact(n-r);
    var per=p/pr
    console.log(per)
    return per;
}

var fact=(num)=>{
    f=1
    for(var i=1;i<=num;i++){
        f=f*i;

    }
    console.log(f);
    return f;

}

