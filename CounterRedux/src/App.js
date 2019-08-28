import React, { Component } from 'react';
import Router from './Router';
import {NavLink} from 'react-router-dom'


const Navigation = (props) => <nav>
   <ul>
     <li><NavLink to ='/'>Home</NavLink></li>
     <li><NavLink to ='/cart'>Cart</NavLink></li>
   </ul>
</nav>

class App extends React.Component {
  render(){
  return(
    <div>
      <h1> My Shopping cart</h1>
      <Navigation />
      <Router />
    </div>
  );
  }
}

export default App;