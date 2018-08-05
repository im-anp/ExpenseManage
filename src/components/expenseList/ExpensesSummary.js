import React, {Component} from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../../selector/expenses';
import selectExpensesTotal from '../../selector/expenses-total';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import FilterIcon from '@material-ui/icons/FilterList';
import ExpenseFilter from '../../components/expenseList/expenseListFilter';
class ExpensesSummary extends React.Component{
  constructor(props){
    super(props);
    
  }
  state={
      filter:false
  }
 
  render(){
    const formattedExpensesTotal = numeral(this.props.expensesTotal).format('0,0.00');
    return (
      <div>
        <div className="expense-summary clearfix">
          <div className="pull-left summary">
            <span className="mr">Expense: {this.props.expenseCount}</span>
            <span>Total Amount: Rs {formattedExpensesTotal}</span>
          </div>
          <div className="pull-right">
            <IconButton onClick={()=>this.setState((prevState) =>({
              filter:(this.state.filter)?false:true
            })
            )} className="button" aria-label="Delete" color="primary">
              <FilterIcon />
            </IconButton>
          </div>
        </div>
        {(this.state.filter)?<ExpenseFilter />:null}
        
      </div>
    )
  }
}
// export const ExpensesSummary = (props) => {
//   // const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses' ;
//   // const formattedExpensesTotal = numeral(props.expensesTotal).format('0,0.00');
//   return (
//     <div>
//       <div className="expense-summary clearfix">
//         <div className="pull-left summary">
//           <span className="mr">Expense: {props.expenseCount}</span>
//           <span>Total Amount: Rs {formattedExpensesTotal}</span>
//         </div>
//         <div className="pull-right">
//           <IconButton className="button" aria-label="Delete" color="primary">
//             <FilterIcon />
//           </IconButton>
//         </div>
//       </div>
//       <ExpenseFilter />
//     </div>
//     // <div>
//     //   <h1>Viewing {props.expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
//     // </div>
//   );
// };

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expense,state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    total:selectExpensesTotal(state.expense)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
