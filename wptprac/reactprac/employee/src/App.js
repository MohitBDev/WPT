import React,{Component} from 'react'
import EmployeeTable from './components/EmployeeTable'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"",
      arr:['kiran','shriyash','prathmesh']

    }


  }
  addata=(nm)=>{
    this.setState({...this.state,arr:[...this.state.arr,nm]})
}
  render(){
    return(
      <div>
      <h1>Employee Table</h1>
      <EmployeeTable  empdata={this.state.arr} insertD={this.addata}/>



      </div>


    )
  }





}

export default App;
