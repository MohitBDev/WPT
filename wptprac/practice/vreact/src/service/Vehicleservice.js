import axios from 'axios'
let baseurl="http://localhost:3002"
class Vehicleservice{
     getall=()=>{
        return axios.get(baseurl+"/vehicles");
     }
     getbyid=(vid)=>{
        return axios.get(baseurl+"/vehicles/vehicle/"+vid);
     }
     add=(v)=>{
        return axios.post(baseurl+"/vehicles/vehicle/"+v.vid,v);
     }
     update=(v)=>{
        return axios.put(baseurl+"/vehicles/vehicle/"+v.vid,v);
     }

     delete=(vid)=>{
        return axios.delete(baseurl+"/vehicles/vehicle/"+vid);
     }



    }
    export default new Vehicleservice();

