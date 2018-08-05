import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,Switch,Router} from 'react-router';
import browserHistory from 'history/createBrowserHistory';
import Home from './components/home/home';
import Login from './components/login';
import AddExpense from './components/addExpense/addExpense';
import EditExpense from './components/editExpense/editExpense';
import PrivateRoute from './privateRoutes';
import PublicRoute from './publicRoutes';

export const history = browserHistory();

class Routes extends Component {

    render(){
        return (
        <Router history={history}>
            <Switch>
                <PublicRoute path="/" exact component={Login} />
                <PrivateRoute path="/dashboard" exact component={Home} />
                <PrivateRoute path="/add_expense" exact component={AddExpense} />
                <PrivateRoute path="/edit/:id" exact component={EditExpense} />
            </Switch>
        </Router>
           
        )
    }
}

export default Routes;