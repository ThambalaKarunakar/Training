import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { createStore } from 'redux';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';


function productsReducer(state = [], action){
    // if(action.type === 'changeState'){
    //     return action.payload.newState;
    return 'state';
    //}
   // console.log(action);
   // return 'State';
}

function userReducer(state ='', { type, payload }){
    switch (type){
        case 'updateUser' :
        return payload;
    }
}
return state;
const allReducers = combineReducers(
    {
    products : productsReducer,
    user : userReducer
   },
   window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(allReducers,{
    products : [{ name:'iPhone'}],
    user : 'Michel'
});
console.log(store.getState());

// const action ={
//     type: 'changeState',
//     payload :{
//         newState: 'New State'
//     }
// };
// store.dispatch(action);
// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
