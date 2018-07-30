import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

class ExpenceForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            description:props.expense?props.expense.description:'',
            amount:props.expense ? props.expense.amount:0,
            note:props.expense ? props.expense.note: '',
            createdAt:props.expense ? moment(props.expense.createdAt): moment(),
            calenderFocus:false,
            error:''
        }
    }

    onDescriptionChange =(e) =>{
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    changeNote = (e) =>{
        const note = e.target.value;
        this.setState(()=>({note}));
    }
    onAmountChange = (e) =>{
        const amount = e.target.value;
        if(amount.match(/^\d*(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }  
    }
    dateChange =(createdAt) =>{
        if(createdAt){
            this.setState(() => ({createdAt}));  
        }
        
    }
    focusChange = ({focused}) =>{
        this.setState(() =>({calenderFocus:focused}))
    }
    OnSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState({error:'Please set Description and amount'});
        }
        else{
            this.setState({error:''});
            console.log('Submitted');
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt:this.state.createdAt.valueOf(),
                note:this.state.note
            });
        }
        
    };
    render(){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.OnSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" value={this.state.description} onChange={this.onDescriptionChange} placeholder="Description" />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" value={this.state.amount} onChange={this.onAmountChange} placeholder="Amount" />
                </div>
                <SingleDatePicker
                    date={this.state.createdAt} // momentPropTypes.momentObj or null
                    onDateChange={this.dateChange} // PropTypes.func.isRequired
                    focused={this.state.calenderFocus} // PropTypes.bool
                    onFocusChange={this.focusChange} // PropTypes.func.isRequired
                    numberOfMonths ={1}
                    isOutsideRange ={()=>false}
                    />
                <div className="form-group">
                   <textarea className="form-control" value={this.state.note} onChange={this.changeNote} placeholder="Add Note for your Expense"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Save</button>
                </div>
                </form>
            </div>
        )
    }
}

export default ExpenceForm;