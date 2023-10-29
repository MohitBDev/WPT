import React,{Component} from 'react'
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={count:0}

    }
    reset=()=>{
       this.setState({count:0})

    }
    decreament=()=>{
        if(this.state.count>0)
        this.setState({count:this.state.count-1})
        else
        this.setState({count:0})


    }
    increament=()=>{
        this.setState({count:this.state.count+1})

    }
    

render(){
    return(
        <div>
               <h1>from counter component</h1>
               {this.state.count>0?<h3>you clicked {this.state.count} times</h3>:""}
               
               <button type="button" name="btn" id="btn" value="btn" onClick={this.reset}>Reset Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="button" name="btn" id="btn" value="btn" onClick={this.decreament}>Deccreament Counter</button>&nbsp;&nbsp;&nbsp;&nbsp;
               <button type="button" name="btn" id="btn" value="btn" onClick={this.increament}>IncreamentCounter</button>
             </div>



    )




}





}
export default Counter;
