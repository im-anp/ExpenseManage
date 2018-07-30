import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch} from 'react-router';
import Home from './components/home/home';
import AddExpense from './components/addExpense/addExpense';
import EditExpense from './components/editExpense/editExpense';

class Routes extends Component {

    render(){
        return (
        
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add_expense" exact component={AddExpense} />
                <Route path="/edit/:id" exact component={EditExpense} />
            </Switch>
           
        )
    }
}

export default Routes;