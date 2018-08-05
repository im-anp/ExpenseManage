import React from 'react';
import ExpenseForm from '../expenseForm/expenseForm';
// import {addExpense} from '../../action/expenses';
import {connect} from 'react-redux';
import Header from '../header/header';
import { startEditExpense, startRemoveExpense } from '../../action/expenses';


const EditExpense = (props) => {
    return(
        <div>
            <Header />
            <h1>Edit Your Expense</h1>
            <ExpenseForm expense = {props.expense} 
             onSubmit ={(expense)=>{
                 console.log('updated',expense);
                 props.dispatch(startEditExpense(props.expense.id,expense));
                 props.history.push('/');
             }}
            />
            <button className="btn btn-danger" onClick = {()=>{
                props.dispatch(startRemoveExpense({id:props.expense.id}));
                props.history.push('/');
            }}>Remove</button>
        </div>
    )
}

const mapStateToProps = (state,props) =>{
    return{
        expense:state.expense.find((expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpense);