import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Routes, {history} from './routes';
import configStore from './store/configStore';
import { startSetExpense } from './action/expenses';
import { setTextFilter } from './action/filters';
import {login, logout} from './action/auth';
import getVisibleExpense from './selector/expenses';
import { Provider } from 'react-redux';
import {firebase} from './firebase/firebase';

const store = configStore();

const App = () => {
    

    // store.dispatch(addExpense({ description: 'house rent', amount: 10000 }));
    // store.dispatch(addExpense({ description: 'Electric Bill', amount: 20000 }));
    // store.dispatch(addExpense({ description: 'Food Bill', amount: 2000 }));
   // store.dispatch(setTextFilter(''));

    const state = store.getState();
    console.log(state);
    const visibleExpense = getVisibleExpense(state.expense, state.filters);

    console.log(visibleExpense);
    console.log(store.getState());
    return ( 
        <Provider store = { store }>
        
            <Routes / >
        
        </Provider>
    )
}

let hasRandered = false;
const renderApp = () =>{
    if(!hasRandered){
        ReactDOM.render( <App /> , document.getElementById('root'));
        hasRandered=true;
    }
}

ReactDOM.render( <p>Loading...</p> , document.getElementById('root'));



firebase.auth().onAuthStateChanged((user)=>{
    if(user){
       console.log('uid',user.photoURL);
        store.dispatch(login(user.uid,user.photoURL));
        store.dispatch(startSetExpense()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }
    else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }

})