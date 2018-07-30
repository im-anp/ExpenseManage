import React from 'react';
import ExpenseForm from '../expenseForm/expenseForm';
import {addExpense} from '../../action/expenses';
import {connect} from 'react-redux';
import Header from '../header/header';

const AddExpense = (props) => {
    return(
        <div>
            <Header />
            <h1>Add Your Expense</h1>
            <ExpenseForm onSubmit={(expense)=>{
                console.log(expense);
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }} />
        </div>
    )
}

export default connect()(AddExpense);