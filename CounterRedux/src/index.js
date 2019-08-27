import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import { BrowserRouter } from 'react-router-dom'

//import store from './config/store'
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

const initialState ={
  count :0
}
function reducer(state=initialState,action){
  switch(action.type){
    case 'INCREMENT' :
    return{
      count: state.count +1
    };
     case 'DECREMENT' :
    return{
      count: state.count -1
    };
    default:
      return state;
  }
}
const store = createStore(reducer);
store.dispatch({ type: 'INCREMENT'});
store.dispatch({ type: 'DECREMENT'});
const App = ()=>(
  <Provider store={store}>
    
    <Counter  />
  </Provider>
);
//const app = <Provider store= {store}>

  //<BrowserRouter>
   //<App/>
//</BrowserRouter>
//</Provider>

ReactDOM.render(<App />, document.getElementById('root'));

