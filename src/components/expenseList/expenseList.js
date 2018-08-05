import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../../selector/expenses';
import totalList from '../../selector/expenses-total';

const ExpenseList = (props) => {
    console.log('anoop',props.total);
    return(
        <div>
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
        expenses:selectExpenses(state.expense,state.filters),
        total:totalList(state.expense)
    }
}



export default connect(mapStateToProps)(ExpenseList);