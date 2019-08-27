import React from 'react';
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage';
import CartPage from './pages/cartpage';

const Router = () => (
    <switch>
      <Route exact path= '/' component ={HomePage}/>
      <Route exact path= '/cart' component ={CartPage}/>
    </switch>
)

export default Router;