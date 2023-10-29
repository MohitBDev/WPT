import axios from 'axios'
const baseurl= "http://localhost:3002";
class Studentservice{

    
    getall=()=>{
        return    axios.get(baseurl+"/students");

    }
    getbyid=(id)=>{
        return  axios.get(baseurl+"/students/student/"+id);

    }
    addstud=(stud)=>{
        return  axios.post(baseurl+"/students/student/"+stud.studid,stud);

    }
    updatestud=(stud)=>{
        return  axios.put(baseurl+"/students/student/"+stud.studid,stud);

    }
    deletebyid=(id)=>{
        return  axios.delete(baseurl+"/students/student/"+id);

    }



    
}
export default new Studentservice();