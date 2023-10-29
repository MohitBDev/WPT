import axios from 'axios'
const baseurl="http://localhost:3002"
class empservice{
    getEmployees(){
        return axios.get(baseurl+"/employees")
    }
    getById(id){
        return axios.get(baseurl+"/employees/employee/"+id)
    }
    updateemp(emp){
        return axios.put(baseurl+"/employees/employee/"+emp.empid,emp)
    }
    addEmp(emp){
        
       return axios.post(baseurl+"/employees/employee/"+emp.empid,emp)
    }
}
export default new empservice();