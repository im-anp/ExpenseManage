import React, {Component} from 'react';
import Header from '../header/header';
import './home.css';
import ExpenseList from '../expenseList/expenseList';
import ExpensesSummary from '../expenseList/ExpensesSummary';

class Home extends Component {

    render(){
        return (
            <div className="main-container">
                <Header />
                <ExpensesSummary />
                <ExpenseList />
            </div>
        )
    }
}

export default Home;