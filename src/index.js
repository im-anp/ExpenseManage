import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Routes from './routes';
import configStore from './store/configStore';
import {addExpense} from './action/expenses';
import {setTextFilter} from './action/filters';
import getVisibleExpense from './selector/expenses';
import {Provider} from 'react-redux';


const App = () =>{
    const store = configStore();

    store.dispatch(addExpense({description:'house rent',amount:10000}));
    store.dispatch(addExpense({description:'Electric Bill',amount:20000}));
    store.dispatch(addExpense({description:'Food Bill',amount:2000}));
    store.dispatch(setTextFilter(''));

    const state = store.getState();
    console.log(state);
   const visibleExpense = getVisibleExpense(state.expense,state.filters);

    console.log(visibleExpense);
    console.log(store.getState());
    return(
        <Provider store = {store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

