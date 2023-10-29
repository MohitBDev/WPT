import axios from 'axios'
const baseurl="http://localhost:3002"
class ProductService{
    getall=()=>{
        return axios.get(baseurl+"/products")
    }
    getbyid=(pid)=>{
        return axios.get(baseurl+"/products/product/"+pid)
    }
    add=(p)=>{
        return axios.post(baseurl+"/products/product/"+p.pid,p)
    }
    update=(p)=>{
        return axios.put(baseurl+"/products/product/"+p.pid,p)
    }
    delete=(pid)=>{
        return axios.delete(baseurl+"/products/product/"+pid)
    }
}
export default new ProductService();