import React from 'react';
import Form from './Form';
import Emps from './Emps';
import Emp from './Emp';
import './App.css';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      count : 0
    };
  }
  btnClick(){
    this.setState({
      count : this.state.count +1
    });
  }
 
render() {

  return (
    <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.btnClick.bind(this)}>Incrementby 1</button>
     
      <Emp/>
    </div>
  );
}
}

export default App;
