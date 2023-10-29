import React,{Component} from 'react'
import EmployeeTable from './components/EmployeeTable'
 export default class App  extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name:"kiran",
             arr:["kiran","shriyash"]
            }
      
  }
 addname=(nm)=>{
  this.setState({...this.state,arr:[this.state.arr,nm]})

  }
  render(){
    return(
      <div>
        <h1>{this.state.arr}</h1>
        <EmployeeTable  text="Add" empdata={this.state.arr} insertdata={this.addname}/>
        

      </div>
    )
   
  }

}
