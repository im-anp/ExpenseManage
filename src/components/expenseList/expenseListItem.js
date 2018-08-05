import React from 'react';
import {Link} from 'react-router-dom';
import {startRemoveExpense} from '../../action/expenses';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ExpenseListItem = (props) => {
    var items = ['yellow','pink','blue','green']
    var item = items[Math.floor(Math.random()*items.length)];
    let classN = `row ex-item ${item}`;
    return(
        <div className={classN}>
            <div className="col-sm-12 form-group">
                <div className="heading clearfix">
                    <div className="pull-left">
                        <h4>{props.description}</h4>
                    </div>
                    <div className="pull-right">
                        <Link to={`/edit/${props.id}`}>
                        <Button variant="fab" mini color="primary" aria-label="Edit">
                            <EditIcon />
                        </Button>
                        </Link>
                    </div>
                </div>
               
                <div className="amount-sec">
                    Rs {numeral(props.amount).format('RS0,0.00')}
                    
                </div>
                <div className="date-sec clearfix">
                    <div className="pull-left date">
                     {moment(props.createdAt).format('MMMM Do, YYYY')}
                    </div>
                    <div className="pull-right">
                        <Button variant="fab" onClick = {()=>{
                             props.dispatch(startRemoveExpense({id:props.id}));
                        }} mini color="secondary" aria-label="Remove">
                            <DeleteIcon />
                        </Button>
                    </div>
                </div>


                {/* <button className="btn btn-danger" onClick = {()=>{
                    props.dispatch(startRemoveExpense({id:props.id}));
                }}>Remove</button> */}
            </div>
        </div>
    )
}

export default connect()(ExpenseListItem) ;