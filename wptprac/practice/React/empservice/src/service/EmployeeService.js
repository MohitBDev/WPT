class EmployeeService{
    constructor(){
        this.earr=[{empid:1,ename:"Kiran",sal:3456},
        {empid:2,ename:"shriyash",sal:5555},
        {empid:3,ename:"parathmesh",sal:44444}]
    }


getemp(){
    return this.earr;
}
add(emp){
    console.log(emp)
    let pos=this.earr.findIndex(e=>e.empid==emp.empid)
    if(pos==-1){
    this.earr.push(emp)
    }
}


}
export default new EmployeeService();