import React from 'react'
import '../App.css';
import EmployeeForm from './Employeeform'


export default class EmployeeTable extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            earr: this.props.arr,
           flag:false
        }
        this.delta = this.delta.bind(this)
    }

    delta = () => {
        this.setState({flag:this.state.flag=true})
        this.setState({earr:this.props.arr})
        
      }
    add1=(emp)=>{
        console.log("Employee Table :",emp)
        this.props.add(emp)
        this.setState({...this.state,flag:false});
        this.setState({...this.state,earr:this.props.arr});
    }
    render() {
        return (
            <div className='App'>
                <button type='button' onClick={this.delta}> Form</button>
          

                <table border="2">
                    <thead>
                        <th>Empid</th>
                        <th>Ename</th>
                        <th>Sal</th>
                    </thead>
                    <tbody>
                        {this.state.earr.map((emp,index) => <tr key={index}>
                            <td>{emp.empid}</td>
                            <td>{emp.ename}</td>
                            <td>{emp.sal}</td>
                        </tr>)}



                    </tbody>

                </table>
                

                {this.state.flag ? <EmployeeForm insert={this.add1}/> : ""}

            </div>
        )
    }

}