import React from 'react';
import ExpenseForm from '../expenseForm/expenseForm';
import {startAddExpense} from '../../action/expenses';
import {connect} from 'react-redux';
import Header from '../header/header';
export class AddExpense extends React.Component {
    onSubmit = (expense) => {
      this.props.startAddExpense(expense);
      this.props.history.push('/');
    };
    render() {
      return (
        <div>
          <h1>Add Expense</h1>
          <ExpenseForm
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
  }
  
  const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  });
  
  export default connect(undefined, mapDispatchToProps)(AddExpense);
  
// const AddExpense = (props) => {
//     return(
//         <div>
//             <Header />
//             <h1>Add Your Expense</h1>
//             <ExpenseForm onSubmit={(expense)=>{
//                 console.log(expense);
//                 props.dispatch(startAddExpense(expense));
//                 props.history.push('/');
//             }} />
//         </div>
//     )
// }

// export default connect()(AddExpense);