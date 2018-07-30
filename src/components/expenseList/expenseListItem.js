import React from 'react';
import {Link} from 'react-router-dom';
import {removeExpense} from '../../action/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = (props) => {
    return(
        <div>
            <Link to={`/edit/${props.id}`}>
                <h4>{props.description}</h4>
            </Link>
            <p>{props.amount} - {props.createdAt}</p>
            <button className="btn btn-danger" onClick = {()=>{
                props.dispatch(removeExpense({id:props.id}));
            }}>Remove</button>
        </div>
    )
}

export default connect()(ExpenseListItem) ;