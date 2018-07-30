import React, {Component} from 'react';
import Header from '../header/header';
import './home.css';
import ExpenseList from '../expenseList/expenseList';
import ExpenseFilter from '../../components/expenseList/expenseListFilter';

class Home extends Component {

    render(){
        return (
            <div className="main-container">
                <Header />
                <ExpenseFilter />
                <ExpenseList />
            </div>
        )
    }
}

export default Home;