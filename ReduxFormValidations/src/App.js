import React from 'react';
import FormCode from './FormCode';
import { Field, reduxForm,startSubmit } from 'redux-form';


class App extends React.Component {
  submit = (values) => {
    alert("submitted");
    console.log(values);
  }
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">Redux Form Validation</h3>
        <FormCode onSubmit={this.submit} />
        
      </div>
     
    )
  }
}

export default App;