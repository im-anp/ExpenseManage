import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../../selector/expenses';

const ExpenseList = (props) => {
    return(
        <div>
            <h1>ExpenseList</h1>
            {
                props.expenses.map((expense)=>{
                    return <ExpenseListItem key={expense.id} {...expense} />;
                })
            }
        </div>
    );
   
}

const mapStateToProps = (state) =>{
    return{
        expenses:selectExpenses(state.expense,state.filters)
    }
}



export default connect(mapStateToProps)(ExpenseList);