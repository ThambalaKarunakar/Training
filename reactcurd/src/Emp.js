import React from 'react';
import Emps from './Emps';

class Emp extends React.Component{

    state = {
        emps: [
              {id:101, name: 'Jhon', salary:'8000'},
              {id:102, name: 'Roshan', salary:'7000'},
              {id:103, name: 'Raghav', salary:'5000'},
              {id:104, name: 'James', salary:'9000'},
              {id:105, name: 'Luis', salary:'6000'}
        ]
    }
    delEmp=(index,e) => {
        const copyemps = Object.assign([], this.state.emps);
        copyemps.splice(index,1);
        this.setState({emps:copyemps});
    }
    render(){
        return(
        <div>
            <table style={{width:'500px', color :'blue'}}>
              <tbody>{
                  this.state.emps.map(emp=>
                  <Emps  salary={emp.salary} 
                    key={emp.id} 
                    deleteEvent={this.delEmp.bind(this)}>
                        {emp.name}
                        </Emps>
                    )
              }
              </tbody>
            </table>
        </div>
        );
    }
}


export default Emp;